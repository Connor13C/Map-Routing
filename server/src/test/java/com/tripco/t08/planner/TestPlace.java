package com.tripco.t08.planner;


import com.tripco.t08.util.CoordinateParser;

import org.junit.Test;



import static org.junit.Assert.*;

public class TestPlace {
    

        @Test
        public void testInvalidParserArg() {
            Place coordinate1 = place("40° 26′ 46″ N ","79° 58′ 56″ W");
            assertEquals(-1, coordinate1.distanceTo(null), 0.001);
        }

        @Test
        public void testSameCoord() {
            Place coordinate1 = place("160.0","0.0");
            Place coordinate2 = place("160.0","0.0");
            assertEquals(0, coordinate1.distanceTo(coordinate2), 0.001);
        }

        @Test
        public void testCorrectDistanceMi() {
            Place coordinate1 = place("40.445","-79.982");
            Place coordinate2 = place("40.445","-78.982");
            assertEquals( 53, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testCorrectDistanceKm() {
            Place coordinate1 = place("0.0","130.0");
            Place coordinate2 = place("0.0","131.0");
            assertEquals( 111, coordinate1.distanceTo(coordinate2,DistanceUnit.KILOMETERS), 0.001);
        }
        @Test
        public void testDirectionsOne() {
            Place coordinate1 = place("1.0","-1.0");
            Place coordinate2 = place("1.0","1.0");
            assertEquals( 138, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsTwo() {
            Place coordinate1 = place("-1.0","1.0");
            Place coordinate2 = place("1.0","1.0");
            assertEquals( 138, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsThree() {
            Place coordinate1 = place("-1.0","-1.0");
            Place coordinate2 = place("1.0","1.0");
            assertEquals( 195, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        @Test
        public void testDirectionsFour() {
            Place coordinate1 = place("-1.0","-1.0");
            Place coordinate2 = place("-2.0","-2.0");
            assertEquals( 98, coordinate1.distanceTo(coordinate2,DistanceUnit.MILES), 0.001);
        }
        
        private static Place place(String lat, String longitude) {
            return new Place("t", "test place", CoordinateParser.parse(lat), CoordinateParser.parse(longitude));
        }
        
        
}
