package com.tripco.t08.planner;

import org.junit.Test;

import static org.junit.Assert.*;

public class TestAirport {

    @Test
    public void TestAirportConstructor() {
        Airport airport = new Airport("ABC", "ConAIR", "100.0", "50.0");
        assertTrue("Airport id not intialized correctly", airport.getId() == "ABC");
        assertTrue("Airport name not intialized correctly", airport.getName() == "ConAIR");
        assertTrue("Airport latitude not intialized correctly", airport.getLatitude() == "100.0");
        assertTrue("Airport longitude not intialized correctly", airport.getLongitude() == "50.0");
    }

}