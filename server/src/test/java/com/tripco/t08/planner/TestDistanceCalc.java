package com.tripco.t08.planner;


import com.tripco.t08.util.CoordinateParser;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;



import static org.junit.Assert.*;
/*
This class contains tests for the DistanceCalc class.
*/
@RunWith(JUnit4.class)
public class TestDistanceCalc {


        // Setup to be done before every test in TestPlan


        @Test
        public void testInvalidParserArg() {
            // assertTrue checks if a statement is true
            Coordinate coordinate1 = CoordinateParser.parse("40° 26′ 46″ N 79° 58′ 56″ W");
            Coordinate coordinate2 = CoordinateParser.parse("-180");
            assertEquals(-1, DistanceCalc.distanceTo(coordinate1, coordinate2, DistanceUnit.MILES), 0.001);
        }

        @Test
        public void testCorrectDistance() {
            Coordinate coordinate1 = CoordinateParser.parse("40.445 -79.982");
            Coordinate coordinate2 = CoordinateParser.parse("40.445 -78.982");
            assertEquals( 53, DistanceCalc.distanceTo(coordinate1, coordinate2, DistanceUnit.MILES), 0.001);
        }

}
