
package com.tripco.t08.planner;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.tripco.t08.server.HTTP;
import spark.Request;

import java.util.List;


/**
 * The Query class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Query {
    // The variables in this class should reflect TFFI.
    public int version;
    public String type;
    public String query;
    public List<Airport> places;

    // Gson is thread safe
    private static final Gson GSON = new GsonBuilder()
            .registerTypeAdapter(new TypeToken<Place>(){}.getType(), new Place.Serializer())
            .create();


    public Query(int version, String type, String query, List<Airport> places) {
        this.version = version;
        this.type = type;
        this.query = query;
        this.places = places;
    }

    /** Handles trip planning request, creating a new trip object from the trip request.
     * Does the conversion from Json to a Java class before planning the trip.
     * @param request
     */
    public Query (Request request) {
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
    public String getQuery () {
        return GSON.toJson(trip);
    }

}
