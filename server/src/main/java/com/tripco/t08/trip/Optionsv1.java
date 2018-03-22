package com.tripco.t08.trip;

import com.tripco.t08.planner.DistanceUnit;

public class Optionsv1 implements Options {
    public String distance;
    public String optimization;

    @Override
    public DistanceUnit getDistanceUnit() {
        return DistanceUnit.getDistanceUnit(distance);
    }
}
