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
     * Creates a trip from the body of the provided request based
     * on the version of the trip.
     * @param request request to extract trip from
     * @return Versioned trip object
     */
    static Trip from(Request request) {
        JsonElement element = PARSER.parse(request.body());
        if (!(element instanceof JsonObject)) {
            throw new IllegalArgumentException("Invalid json");
        }
        JsonObject object = (JsonObject) element;
        int version = object.has("version") ? object.get("version").getAsInt() : 1;
        switch (version) {
            case 1 : return GSON.fromJson(object, Tripv1.class);
            case 2 : return GSON.fromJson(object, Tripv2.class);
            default: return GSON.fromJson(object, Tripv3.class);
        }
    }
}
