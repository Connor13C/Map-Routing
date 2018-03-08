package com.tripco.t08.planner;

public enum DistanceUnit {
    KILOMETERS(6371.0088),
    MILES(3958.7613),
    NAUTICAL_MILES(3440.0695);

    private final double conversionFactor;


    DistanceUnit(double conversionFactor) {
        this.conversionFactor = conversionFactor;
    }

    public double getConversionFactor() {
        return conversionFactor;
    }

    public static DistanceUnit getDistanceUnit(String dist){
        if(dist.equals("miles")){
            return DistanceUnit.MILES;
        }
        if(dist.equals("nautical miles")){
            return DistanceUnit.NAUTICAL_MILES;
        }
        else{
            return DistanceUnit.KILOMETERS;
        }
    }
}
