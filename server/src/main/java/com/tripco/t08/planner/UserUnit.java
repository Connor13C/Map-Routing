package com.tripco.t08.planner;

public class UserUnit implements DistanceUnit{
    private final double conversionFactor;

    public UserUnit(double conversionFactor){
        this.conversionFactor=conversionFactor;
    }

    public double getConversionFactor() {
        return conversionFactor;
    }
}
