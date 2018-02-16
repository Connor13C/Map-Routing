package com.tripco.t08.planner;


import com.tripco.t08.util.CoordinateParser;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;



import static org.junit.Assert.*;
/*
This class contains tests for the DistanceCalc class.
*/

public class TestCoordinate {


        // Setup to be done before every test in TestPlan


        @Test
        public void testInvalidParserArg() {
            // assertTrue checks if a statement is true
            Coordinate coordinate1 = CoordinateParser.parse("40° 26′ 46″ N 79° 58′ 56″ W");
            Coordinate coordinate2 = CoordinateParser.parse("-180");
            assertEquals(-1, coordinate1.distanceTo(coordinate2), 0.001);
        }

        @Test
        public void testSameCoord() {
            // assertTrue checks if a statement is true
            Coordinate coordinate1 = CoordinateParser.parse("160.0 0.0");
            Coordinate coordinate2 = CoordinateParser.parse("160.0 0.0");
            assertEquals(0, coordinate1.distanceTo(coordinate2), 0.001);
        }

        @Test
        public void testCorrectDistanceMi() {
            Coordinate coordinate1 = CoordinateParser.parse("40.445 -79.982");
            Coordinate coordinate2 = CoordinateParser.parse("40.445 -78.982");
            assertEquals( 53, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testCorrectDistanceKm() {
            Coordinate coordinate1 = CoordinateParser.parse("0.0 130.0");
            Coordinate coordinate2 = CoordinateParser.parse("0.0 131.0");
            assertEquals( 111, coordinate1.distanceTo(coordinate2,DistanceUnit.KILOMETERS), 0.001);
        }
        @Test
        public void testDirectionsOne() {
            Coordinate coordinate1 = CoordinateParser.parse("1.0 -1.0");
            Coordinate coordinate2 = CoordinateParser.parse("1.0 1.0");
            assertEquals( 138, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsTwo() {
            Coordinate coordinate1 = CoordinateParser.parse("-1.0 1.0");
            Coordinate coordinate2 = CoordinateParser.parse("1.0 1.0");
            assertEquals( 138, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsThree() {
            Coordinate coordinate1 = CoordinateParser.parse("-1.0 -1.0");
            Coordinate coordinate2 = CoordinateParser.parse("1.0 1.0");
            assertEquals( 195, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsFour() {
            Coordinate coordinate1 = CoordinateParser.parse("-1.0 -1.0");
            Coordinate coordinate2 = CoordinateParser.parse("-2.0 -2.0");
            assertEquals( 98, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
}
