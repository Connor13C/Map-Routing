package com.tripco.t08.planner;


import org.junit.Test;

import static org.junit.Assert.*;

public class TestCommonUnit {

    @Test
    public void TestCommonUnit(){
        CommonUnit miles = CommonUnit.getDistanceUnit("miles");
        assertEquals(3958.7613, miles.getConversionFactor(), 0.1);
        CommonUnit km =  CommonUnit.getDistanceUnit("kilometers");
        assertEquals(6371.0088, km.getConversionFactor(), 0.1);
        CommonUnit nautMiles =  CommonUnit.getDistanceUnit("nautical miles");
        assertEquals(3440.0695, nautMiles.getConversionFactor(), 0.1);
    }
}
