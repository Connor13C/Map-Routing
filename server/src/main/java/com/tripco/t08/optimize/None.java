package com.tripco.t08.optimize;

import com.tripco.t08.planner.Place;

import java.util.List;

public class None implements Optimization{
    @Override
    public List<Place> optimize(List<Place> places) {
        return places;
    }
}
