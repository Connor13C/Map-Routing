package com.tripco.t08.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class CoordinateParser {
    // This is completely unreadable but it works.
    private static final Pattern COORD = Pattern.compile(
            "^\\s*(?:(\\d+(?:\\.\\d+)?)\\s*(?:[°\\s]|$))?" +
            "\\s*(?:(\\d+(?:\\.\\d+)?)\\s*(?:[′'\\s]|$))?" +
            "\\s*(?:(\\d+(?:\\.\\d+)?)\\s*[″\"]?)?" +
            "\\s*([NESW])?\\s*$"
    );
    private static final Pattern FLOAT = Pattern.compile(
            "^\\s*(-?(?:\\d+(?:\\.\\d+)?)|(?:\\.\\d+))\\s*$"
    );

    private CoordinateParser() {}

    /**
     * Parses the provided string to a Double.
     * @param coordinate non-null input string
     * @return the Coordinate representation of the string, or null
     *     if the coord did not represent a valid Coordinate.
     */
    public static Double parse(String coordinate) {
        if (coordinate.trim().isEmpty()) {
            return null;
        }
        Matcher matcher = FLOAT.matcher(coordinate);
        if (matcher.matches()) {
            return Double.parseDouble(matcher.group(1));
        }
        matcher = COORD.matcher(coordinate);
        if (matcher.matches()) {
            return extractCoordinate(matcher);
        }

        return null;
    }

    private static Double extractCoordinate(Matcher matcher) {
        double value = 0;
        value += getValue(matcher, 1);
        value += getValue(matcher, 2) / 60;
        value += getValue(matcher, 3) / 3600;
        value *= getSign(matcher);
        return value;
    }

    private static double getValue(Matcher matcher, int index) {
        String match = matcher.group(index);
        return match == null ? 0 : Double.parseDouble(match);

    }

    private static double getSign(Matcher matcher) {
        String match = matcher.group(4);
        return "N".equalsIgnoreCase(match) || "E".equalsIgnoreCase(match) || match == null ? 1 : -1;
    }
}
