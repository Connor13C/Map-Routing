package com.tripco.t08.optimize;

import com.tripco.t08.planner.Place;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@FunctionalInterface
public interface Optimization {
    List<Optimization> STRATEGIES = Arrays.asList(
            new None(),
            new NearestNeighbor(),
            new TwoOpt(),
            new ThreeOpt()
    );

    /**
     * Creates a new list of places which has a cumulative distance less than
     * or equal to the provided list.
     *
     * @param places list of places
     */
    List<Place> optimize(List<Place> places);

    static Optimization getOptimization(double value) {
        if (value > 1 || value < 0) {
            throw new IllegalArgumentException("Invalid optimization: " + value);
        }
        return STRATEGIES.get((int) Math.min(Math.floor(value * STRATEGIES.size()), STRATEGIES.size() -1));
    }

    static void warmup() {
        List<Place> places = new ArrayList<>(100);
        for (int i =0; i < 100; i++) {
            places.add(new Place(i, i));
        }
        STRATEGIES.forEach(opt -> opt.optimize(places));
    }
}
