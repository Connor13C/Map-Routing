package com.tripco.t08.optimize;

import com.tripco.t08.planner.Place;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.IntStream;

public abstract class ParallelOptimization implements Optimization {
    @Override
    public final List<Place> optimize(List<Place> places) {
        if (places.size() < 3) {
            return new ArrayList<>(places);
        }
        PlaceTable[] tables = PlaceTable.createTables(places);

        return IntStream.range(0, places.size()).parallel()
                .mapToObj(i -> withStartingPoint(tables, i))
                .map(this::doOptimize)
                .reduce((t1, t2) -> t1.getDistance() < t2.getDistance() ? t1 : t2)
                .map(ParallelOptimization::rebuildTrip)
                .orElseGet(Collections::emptyList); // Can't happen
    }


    public abstract OptimizedTrip doOptimize(PlaceTable[] trip);

    public static List<Place> rebuildTrip(OptimizedTrip optimizedTrip) {
        List<Place> newList = new ArrayList<>(optimizedTrip.getPlaces().length);
        for (PlaceTable table : optimizedTrip.getPlaces()) {
            newList.add(table.getPlace());
        }
        return newList;
    }

    private static PlaceTable[] withStartingPoint(PlaceTable[] tables, int startingPoint) {
        PlaceTable[] reordered = tables.clone();
        PlaceTable start = reordered[startingPoint];
        reordered[startingPoint] = reordered[0];
        reordered[0] = start;
        return reordered;
    }
}
