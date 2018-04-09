package com.tripco.t08.optimize;

public class NearestNeighbor extends ParallelOptimization {

    @Override
    public OptimizedTrip doOptimize(PlaceTable[] places) {
        long distance = 0;
        for (int i = 0; i < places.length-1; i++) {
            int minIndex = -1;
            double minValue = Double.MAX_VALUE;
            PlaceTable head = places[i];
            for (int j = i+1; j < places.length; j++) {
                double dist = head.distanceTo(places[j]);
                if (dist < minValue) {
                    minIndex = j;
                    minValue = dist;
                }
            }
            distance += minValue;
            swap(places, i+1, minIndex);
        }
        // Round trip
        distance += places[0].distanceTo(places[places.length-1]);
        return new OptimizedTrip(distance, places);
    }

    protected static void swap(PlaceTable[] places, int a, int b) {
        PlaceTable aPlace = places[a];
        places[a] = places[b];
        places[b] = aPlace;
    }

}
