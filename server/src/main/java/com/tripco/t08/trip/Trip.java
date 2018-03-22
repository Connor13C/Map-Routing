package com.tripco.t08.trip;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import com.tripco.t08.planner.Place;
import spark.Request;

public interface Trip {
    JsonParser PARSER = new JsonParser();
    Gson GSON = new GsonBuilder()
            .registerTypeAdapter(new TypeToken<Place>(){}.getType(), new Place.Serializer())
            .create();

    /**
     * Plans the trip, modifying it based on its options and state.
     * This minimally will calculate the distances between places,
     * and generate an SVG representation of the trip.  Depending
     * on the version and options it may optimize the trip.
     */
    void plan();


    default String toJson() {
        return GSON.toJson(this);
    }


    /**
     * Creates a Trip from the body of the provided request based
     * on the version of the Trip.
     * @param request request to extract Trip from
     * @return Versioned Trip object
     */
    static Trip from(Request request) {
        JsonElement element = PARSER.parse(request.body());
        if (!(element instanceof JsonObject)) {
            throw new IllegalArgumentException("Invalid json");
        }
        JsonObject object = (JsonObject) element;
        if (object.has("version")) {
            return GSON.fromJson(object, Tripv2.class);
        } else {
            return GSON.fromJson(object, Tripv1.class);
        }

    }
}
