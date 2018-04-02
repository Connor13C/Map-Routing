package com.tripco.t08.server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import com.tripco.t08.planner.Airports;
import com.tripco.t08.planner.Place;
import com.tripco.t08.planner.Query;

import com.tripco.t08.trip.Trip;

import org.jdbi.v3.core.Jdbi;
import spark.Request;
import spark.Response;

import static spark.Spark.*;


/** A simple micro-server for the web.  Just what we need, nothing more.
 *
 */
public class MicroServer {
  private static final String STATIC_FILES = "/public";
  private final int    port;
  private final String name;
  private final Jdbi jdbi;

  /** Creates a micro-server to load static files and provide REST APIs.
   * @param port the port to run the server on
   * @param name the team name
   * @param jdbi a Jdbi instance to use for database connections
   */
  MicroServer(int port, Jdbi jdbi, String name) {
    this.port = port;
    this.jdbi = jdbi;
    this.name = name;

    port(this.port);

    // serve the static files: index.html and bundle.js
    staticFileLocation(STATIC_FILES);
    get("/", (req, res) -> {res.redirect("index.html"); return null;});

    // register all micro-services and the function that services them.
    // start with HTTP GET
    get("/about", this::about);
    get("/echo", this::echo);
    get("/hello/:name", this::hello);
    get("/team", this::team);
    get("/config", this::config);
    // client is sending data, so a HTTP POST is used instead of a GET
    post("/plan", this::plan);
    post("/query", this::query);

    System.out.println("\n\nServer running on port: " + this.port + "\n\n");
  }

  /** A REST API that describes the server.
   *
   * @param request
   * @param response
   * @return
   */
  private String about(Request request, Response response) {

    response.type("text/html");

    return "<html><head></head><body><h1>"+name+" Micro-server on port "+port+"</h1></body></html>";
  }

  /** A REST API that echos the client request.
   *
   * @param request
   * @param response
   * @return
   */
  private String echo(Request request, Response response) {

    response.type("application/json");

    return HTTP.echoRequest(request);
  }

  /** A REST API demonstrating the use of a parameter.
   *
   * @param request
   * @param response
   * @return
   */
  private String hello(Request request, Response response) {

    response.type("text/html");

    return Greeting.html(request.params(":name"));
  }


  /** A REST API to support trip planning.
   *
   * @param request
   * @param response
   * @return
   */
  private String plan(Request request, Response response) {

    response.type("application/json");

    Trip trip = Trip.from(request);
    trip.plan();

    return trip.toJson();
  }

  /**A REST API to support queries to MariaDB.
   *
   * @param request
   * @param response
   * @return returns list of objects
   */
  private String query(Request request, Response response){

    response.type("application/json");
    Gson GSON = new GsonBuilder()
            .registerTypeAdapter(new TypeToken<Place>(){}.getType(), new Place.Serializer())
            .create();
    // first print the request
    System.out.println(HTTP.echoRequest(request));
    // convert the body of the request to a Java class.
    Query query = GSON.fromJson(request.body(), Query.class);
    Airports airport = jdbi.onDemand(Airports.class);
    query.places = airport.searchEverything("%"+query.query+"%");
    return GSON.toJson(query);
  }

  /** A REST API that returns the team information associated with the server.
   *
   * @param request
   * @param response
   * @return
   */
  private String team(Request request, Response response) {

    response.type("text/plain");

    return name;
  }

  private String config(Request request, Response response) {
    response.type("application/json");

    return "{\"type\": \"config\", \"version\": 3, \"optimization\": 2 }";
  }
}
