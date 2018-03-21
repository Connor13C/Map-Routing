package com.tripco.t08.trip;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.tripco.t08.planner.Place;
import spark.Request;

public interface Trip {
    JsonParser PARSER = new JsonParser();
    Gson GSON = new GsonBuilder()
            .registerTypeAdapter(new TypeToken<Place>(){}.getType(), new Place.Serializer())
            .create();
    void plan();


    default String toJson() {
        return GSON.toJson(this);
    }


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
