
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

    public Query (Request request) {
        Gson GSON = new GsonBuilder()
                .registerTypeAdapter(new TypeToken<Place>(){}.getType(), new Place.Serializer())
                .create();

        // first print the request
        System.out.println(HTTP.echoRequest(request));

        // convert the body of the request to a Java class.
        Query a = GSON.fromJson(request.body(), Query.class);
        this.version=a.version;
        this.type=a.type;
        this.query=a.query;
        this.places=a.places;

    }
}
