package com.tripco.t08.planner;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.tripco.t08.trip.Trip;
import org.jdbi.v3.core.Handle;
import spark.Request;

public interface Query {

    void search(Handle connection);

    default String toJson() {
        return Trip.GSON.toJson(this);
    }

    static Query from(Request request) {
        JsonElement element = Trip.PARSER.parse(request.body());
        if (!(element instanceof JsonObject)) {
            throw new IllegalArgumentException("Invalid json");
        }
        JsonObject object = (JsonObject) element;
        int version = object.has("version") ? object.get("version").getAsInt() : 2;
        switch (version) {
            case 2 : return Trip.GSON.fromJson(object, Queryv2.class);
            default: return Trip.GSON.fromJson(object, Queryv3.class);
        }
    }
}
