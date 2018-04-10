package com.tripco.t08.trip;

import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.DistanceUnit;
import com.tripco.t08.planner.UserUnit;

public class Optionsv3 implements Options {
    private String distance;
    private String userUnit;
    private String userRadius;
    private double optimization;
    private String map;

    @Override
    public DistanceUnit getDistanceUnit() {
        if ("user defined".equals(distance) && userUnit != null && userRadius != null) {
            return new UserUnit(Double.parseDouble(userRadius));
        } else {
            return CommonUnit.getDistanceUnit(distance);
        }
    }

    @Override
    public double getOptimization() {
        return optimization;
    }

    public String getMap() {
        return map;
    }
}
