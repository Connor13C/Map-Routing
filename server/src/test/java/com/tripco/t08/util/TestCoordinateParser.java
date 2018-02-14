package com.tripco.t08.util;

import com.tripco.t08.planner.Coordinate;
import org.junit.Test;

import static org.junit.Assert.*;

public class TestCoordinateParser {

    @Test
    public void testExample() {
        Coordinate coordinate = CoordinateParser.parse("40° 26′ 46″ N 79° 58′ 56″ W");
        assertNotNull(coordinate);
        assertEquals(40 + 26/60D + 46/3600D, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -58/60D + -56/3600D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testNoSeconds() {
        Coordinate coordinate = CoordinateParser.parse("40° 26′ N 79° 58′ W");
        assertNotNull(coordinate);
        assertEquals(40 + 26/60D, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -58/60D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testNoMinutes() {
        Coordinate coordinate = CoordinateParser.parse("40° 46″ N 79° 56″ W");
        assertNotNull(coordinate);
        assertEquals(40 + 46/3600D, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -56/3600D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testOnlyDegrees() {
        Coordinate coordinate = CoordinateParser.parse("40° N 79° E");
        assertNotNull(coordinate);
        assertEquals(40, coordinate.getLatitude(), 0.01);
        assertEquals(79, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testInvalid() {
        Coordinate coordinate = CoordinateParser.parse("40° 46″ Na 79° 56″ W");
        assertNull(coordinate);
    }

    @Test
    public void testInvalidOneNumber() {
        Coordinate coordinate = CoordinateParser.parse("401");
        assertNull(coordinate);
    }

    @Test
    public void testEastAndSouth() {
        Coordinate coordinate = CoordinateParser.parse("40° 26′ 46″ S 79° 58′ 56″ E");
        assertNotNull(coordinate);
        assertEquals(-40 + -26/60D + -46/3600D, coordinate.getLatitude(), 0.01);
        assertEquals(79 + 58/60D + 56/3600D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testBasicDecimalMinutes() {
        Coordinate coordinate = CoordinateParser.parse("40° 26.767′ N 79° 58.933′ W");
        assertNotNull(coordinate);
        assertEquals(40 + 26.767/60D, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -58.933/60D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testBasicFloatingPoint() {
        Coordinate coordinate = CoordinateParser.parse("40.445 -79.982");
        assertNotNull(coordinate);
        assertEquals(40 + 26.767/60D, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -58.933/60D, coordinate.getLongitude(), 0.01);
    }

    @Test
    public void testOneDecimal() {
        Coordinate coordinate = CoordinateParser.parse("40 -79.982");
        assertNotNull(coordinate);
        assertEquals(40, coordinate.getLatitude(), 0.01);
        assertEquals(-79 + -58.933/60D, coordinate.getLongitude(), 0.01);
    }
}
