package com.tripco.t08.planner;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.tripco.t08.server.HTTP;
import spark.Request;

import java.util.ArrayList;

/**
 * This class handles to the conversions of the trip request/resopnse,
 * converting from the Json string in the request body to a Trip object,
 * planning the Trip, and
 * converting the resulting Trip object back to a Json string
 * so it may returned as the response.
 */
public class Plan {
  // Gson is thread safe
  private static final Gson GSON = new Gson();

  private Trip trip;

  /** Handles trip planning request, creating a new trip object from the trip request.
   * Does the conversion from Json to a Java class before planning the trip.
   * @param request
   */
  public Plan (Request request) {
    // first print the request
    System.out.println(HTTP.echoRequest(request));

    // convert the body of the request to a Java class.
    trip = GSON.fromJson(request.body(), Trip.class);

    // plan the trip.
    trip.plan();

    // log something.
    System.out.println(trip.title);
  }

  /** Handles the response for a Trip object.
   * Does the conversion from a Java class to a Json string.*
   */
  public String getTrip () {
    Gson gson = new Gson();
    return gson.toJson(trip);
  }
}
