package com.tripco.t08.optimize;

public class ThreeOpt extends NearestNeighbor {

    @Override
    public OptimizedTrip doOptimize(PlaceTable[] places) {
        // Run nearestNeighbor first
        OptimizedTrip nearestNeighbor = super.doOptimize(places);

        places = nearestNeighbor.getPlaces();
        double totalDistance = nearestNeighbor.getDistance();
        // TODO Do three-opt, updating the totalDistance and places

        return new OptimizedTrip(totalDistance, places);
    }
}
