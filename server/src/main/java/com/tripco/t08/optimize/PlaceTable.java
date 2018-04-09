package com.tripco.t08.optimize;

import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.Place;

import java.util.Arrays;
import java.util.List;

public class PlaceTable {
    private final Place place;
    private final int uniqueId;
    private final double[] distances;

    public PlaceTable(Place place, int uniqueId, int places) {
        this.place = place;
        this.uniqueId = uniqueId;
        this.distances = new double[places];
    }

    public int getUniqueId() {
        return uniqueId;
    }

    public double distanceTo(PlaceTable location) {
        return distances[location.uniqueId];
    }

    public Place getPlace() {
        return this.place;
    }

    public static PlaceTable[] createTables(List<Place> places) {
        PlaceTable[] tables = new PlaceTable[places.size()];
        for (int i = 0; i < tables.length; i++) {
            tables[i] = new PlaceTable(places.get(i), i, places.size());
        }
        for (int i = 0; i < tables.length; i++) {
            Place current = places.get(i);
            for (int j = i; j < tables.length; j++) {
                double dist = current.distanceTo(places.get(j), CommonUnit.KILOMETERS);
                tables[i].distances[j] = dist;
                tables[j].distances[i] = dist;
            }
        }
        return tables;
    }

    @Override
    public String toString() {
        return "PlaceTable{" +
                "place=" + place +
                ", uniqueId=" + uniqueId +
                ", distances=" + Arrays.toString(distances) +
                '}';
    }
}
