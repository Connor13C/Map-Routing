package com.tripco.t08.trip;

import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.DistanceUnit;

public class Optionsv2 implements Options {
    public String distance;
    public Double optimization = 0.0;

    @Override
    public DistanceUnit getDistanceUnit() {
        return CommonUnit.getDistanceUnit(distance);
    }
}
