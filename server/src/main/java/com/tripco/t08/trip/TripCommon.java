package com.tripco.t08.trip;

import com.tripco.t08.optimize.Optimization;
import com.tripco.t08.planner.DistanceUnit;
import com.tripco.t08.planner.Place;
import com.tripco.t08.planner.SvgBuilder;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public abstract class TripCommon implements Trip {
    // The variables in this class should reflect TFFI.
    public String type = "trip";
    public String title;
    public List<Place> places;
    public List<Integer> distances;
    public String map;


    /**
     * Returns an SVG containing the background and the legs of the trip.
     * @return SVG
     */
    protected String svg() {
        return new SvgBuilder(places).build();
    }

    /**
     * Returns the distances between consecutive places,
     * including the return to the starting point to make a round trip.
     * @return list of leg distances based on the ordere of places
     */
    protected List<Integer> legDistances() {
        if (places.isEmpty()) {
            return Collections.emptyList();
        }
        List<Integer> dist = new ArrayList<>();
        DistanceUnit distUnit = getOptions().getDistanceUnit();

        for (int i = 1; i < places.size(); i++) {
            Place previous = places.get(i-1);
            Place current = places.get(i);
            dist.add(Math.round(previous.distanceTo(current, distUnit)));
        }
        Place first = places.get(0);
        Place last = places.get(places.size()-1);
        dist.add(Math.round(first.distanceTo(last, distUnit)));

        return dist;
    }

    abstract Options getOptions();

    @Override
    public void plan() {
        this.places = Optimization.getOptimization(getOptions().getOptimization()).optimize(places);
        this.map = svg();
        this.distances = legDistances();
    }
}
