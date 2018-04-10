package com.tripco.t08.optimize;

import com.tripco.t08.planner.Place;

import java.util.Arrays;

public class OptimizedTrip {
    private final double distance;
    private final PlaceTable[] places;

    public OptimizedTrip(double distance, PlaceTable[] places) {
        this.distance = distance;
        this.places = places;
    }

    public double getDistance() {
        return distance;
    }

    public PlaceTable[] getPlaces() {
        return places;
    }

    @Override
    public String toString() {
        return "OptimizedTrip{" +
                "distance=" + distance +
                ", places=" + Arrays.toString(places) +
                '}';
    }
}
