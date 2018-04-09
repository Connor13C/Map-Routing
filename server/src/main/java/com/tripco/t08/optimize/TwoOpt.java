package com.tripco.t08.optimize;

public class TwoOpt extends NearestNeighbor {

    @Override
    public OptimizedTrip doOptimize(PlaceTable[] places) {
        if (places.length <= 4) {
            return super.doOptimize(places);
        }
        OptimizedTrip nearestNeighbor = super.doOptimize(places);
        places = nearestNeighbor.getPlaces();
        double dist = nearestNeighbor.getDistance();
        boolean improvement = true;
        while (improvement) {
            improvement = false;
            for (int i = 0; i <= places.length-3; i++) {
                for (int k = i +2; k <= places.length-1; k++) {
                    double delta;
                    // Special case the end because it's a round trip
                    if (k == places.length - 1) {
                        // Same as below but k+1 is 0
                        delta = -places[i].distanceTo(places[i+1])
                                -places[k].distanceTo(places[0])
                                +places[i].distanceTo(places[k])
                                +places[i+1].distanceTo(places[0]);
                    } else {
                        delta = -places[i].distanceTo(places[i+1])
                                -places[k].distanceTo(places[k+1])
                                +places[i].distanceTo(places[k])
                                +places[i+1].distanceTo(places[k+1]);
                    }
                    if (delta < 0) {
                        reverse(places, i+1, k);
                        dist += delta;
                        improvement = true;
                    }
                }
            }
        }
        return new OptimizedTrip(dist, places);
    }


    private static void reverse(PlaceTable[] places, int i, int k) {
        while (i < k) {
            PlaceTable temp = places[i];
            places[i] = places[k];
            places[k] = temp;
            i++;
            k--;
        }

    }

}
