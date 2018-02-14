package com.tripco.t08.planner;

public enum DistanceUnit {
    KILOMETERS(6371.0088),
    MILES(3958.7613);

    private final double conversionFactor;


    DistanceUnit(double conversionFactor) {
        this.conversionFactor = conversionFactor;
    }

    public double getConversionFactor() {
        return conversionFactor;
    }
}
