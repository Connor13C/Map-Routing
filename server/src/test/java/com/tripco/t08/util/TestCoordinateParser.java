package com.tripco.t08.util;

import org.junit.Test;

import static org.junit.Assert.*;

public class TestCoordinateParser {

    @Test
    public void testExample() {
        testParse(40 + 26/60D + 46/3600D, "40° 26′ 46″ N");
    }

    @Test
    public void testNoDegrees() {
        testParse(26/60D + 46/3600D, "26' 46\"");
    }

    @Test
    public void testZeroDecimal() {
        testParse(0, "0.0");
    }

    @Test
    public void testZero() {
        testParse(0, "0");
    }

    @Test
    public void testCOSki2() {
        testParse(-106 + -47/60D + -35/3600D, "106°47'35 W");
    }

    @Test
    public void testEmpty() {
        testInvalid("");
    }

    @Test
    public void testNoSeconds() {
        testParse(40 + 26/60D, "40° 26′ N");
    }

    @Test
    public void testNoMinutes() {
        testParse(40 + 46/3600D, "40° 46″ N");
    }

    @Test
    public void testOnlyDegrees() {
        testParse(40, "40° N ");
    }

    @Test
    public void testInvalid() {
        testInvalid("40° 46″ Na");
    }

    @Test
    public void testSouth() {
        testParse(-40 + -26/60D + -46/3600D, "40° 26′ 46″ S");
    }

    @Test
    public void testBasicDecimalMinutes() {
        testParse(40 + 26.767/60D, "40° 26.767′ ");
    }

    @Test
    public void testFloatingPoint() {
        testParse(40 + 26.767/60D, "40.445");
    }

    @Test
    public void testNegativeFloatingPoint() {
        testParse(-79.982, "-79.982");
    }

    @Test
    public void testTwoDecimal() {
        testParse(79.982 + 20.2/60D, "79.982 20.2");
    }

    @Test
    public void testDecimal() {
        testParse(0.7, ".7");
    }

    @Test
    public void testMultipleDecimal() {
        testParse(0.7 + 0.6/60, ".7 .6");
    }

    private static void testInvalid(String input) {
        Double coordinate = CoordinateParser.parse(input);
        assertNull(coordinate);
    }

    private static void testParse(double expected, String input) {
        Double coordinate = CoordinateParser.parse(input);
        assertNotNull(coordinate);
        assertEquals(expected, coordinate, 0.01);
    }
}
