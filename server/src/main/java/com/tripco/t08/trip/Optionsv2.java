package com.tripco.t08.trip;

import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.DistanceUnit;

public class Optionsv2 implements Options {
    public String distance;
    public double optimization;

    @Override
    public DistanceUnit getDistanceUnit() {
        return CommonUnit.getDistanceUnit(distance);
    }

    @Override
    public double getOptimization() {
        return optimization;
    }
}
