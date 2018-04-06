package com.tripco.t08.planner;

public enum CommonUnit implements DistanceUnit{
    KILOMETERS(6371.0088),
    MILES(3958.7613),
    NAUTICAL_MILES(3440.0695);

    private final double conversionFactor;


    CommonUnit(double conversionFactor) {
        this.conversionFactor = conversionFactor;
    }

    public double getConversionFactor() {
        return conversionFactor;
    }

    /**
     * Returns the radius of the earth in miles, kilometers, or nautical miles.
     * @param dist distance type
     * @return the radius of earth in specified type
     */
    public static CommonUnit getDistanceUnit(String dist){
        if(dist.equals("miles")){
            return CommonUnit.MILES;
        }
        if(dist.equals("nautical miles")){
            return CommonUnit.NAUTICAL_MILES;
        }
        else{
            return CommonUnit.KILOMETERS;
        }
    }
}
