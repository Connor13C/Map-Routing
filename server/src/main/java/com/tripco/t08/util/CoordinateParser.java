package com.tripco.t08.util;

import com.tripco.t08.planner.Coordinate;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class CoordinateParser {

    private static final List<CoordinateFormat> FORMATS = Arrays.asList(
            new CoordinateFormat("^\\s*(\\d+)°\\s*(?:(\\d+)(?:′|'))?\\s*(?:(\\d+(?:\\.\\d+)?)(?:″|\"))?\\s*(N|S)\\s*(\\d+)°\\s*(?:(\\d+)(?:′|'))?\\s*(?:(\\d+(?:\\.\\d+)?)(?:″|\"))?\\s*(E|W)\\s*$",
                    CoordinateParser::degreesMinutesSeconds),
            new CoordinateFormat("^\\s*(\\d+)°\\s*(?:(\\d+(?:\\.\\d+)?)(?:′|'))\\s*(N|S)\\s*(\\d+)°\\s*(?:(\\d+(?:\\.\\d+)?)(?:′|'))\\s*(E|W)\\s*$",
                    CoordinateParser::degreesDecimalMinutes),
            new CoordinateFormat("^\\s*(\\d+(?:\\.\\d+)?)°\\s*(N|S)\\s*(\\d+(?:\\.\\d+)?)°\\s*(E|W)\\s*$",
                    CoordinateParser::decimalDegrees),
            new CoordinateFormat("^\\s*(-?\\d+(?:\\.\\d+)?)\\s+(-?\\d+(?:\\.\\d+)?)\\s*$",
                    CoordinateParser::floatingPoint)
    );

    private CoordinateParser() {}

    /**
     * Parses the provided string to a Coordinate.
     * @param coord non-null input string
     * @return the Coordinate representation of the string, or null
     *     if the coord did not represent a valid Coordinate.
     */
    public static Coordinate parse(String coord) {
        for (CoordinateFormat fmt : FORMATS) {
            Coordinate result = fmt.attempt(coord);
            if (result != null) {
                return result;
            }
        }
        return null;
    }

    private static Coordinate degreesMinutesSeconds(Matcher matcher) {
        double lat = Integer.parseInt(matcher.group(1));
        lat += matcher.group(2) == null ? 0 : Double.parseDouble(matcher.group(2))/60D;
        lat += matcher.group(3) == null ? 0 : Double.parseDouble(matcher.group(3))/3600D;
        lat *= matcher.group(4).charAt(0) == 'N' ? 1 : -1;
        double longitude = Integer.parseInt(matcher.group(5));
        longitude += matcher.group(6) == null ? 0 : Double.parseDouble(matcher.group(6))/60D;
        longitude += matcher.group(7) == null ? 0 : Double.parseDouble(matcher.group(7))/3600D;
        longitude *= matcher.group(8).charAt(0) == 'E' ? 1 : -1;
        if (Double.isFinite(lat) && Double.isFinite(longitude)) {
            return new Coordinate(lat, longitude);
        } else {
            return null;
        }

    }
    private static Coordinate degreesDecimalMinutes(Matcher matcher) {
        double lat = Integer.parseInt(matcher.group(1));
        lat += matcher.group(2) == null ? 0 : Double.parseDouble(matcher.group(2))/60D;
        lat *= matcher.group(3).charAt(0) == 'N' ? 1 : -1;
        double longitude = Integer.parseInt(matcher.group(4));
        longitude += matcher.group(5) == null ? 0 : Double.parseDouble(matcher.group(5))/60D;
        longitude *= matcher.group(6).charAt(0) == 'E' ? 1 : -1;
        if (Double.isFinite(lat) && Double.isFinite(longitude)) {
            return new Coordinate(lat, longitude);
        } else {
            return null;
        }
    }
    private static Coordinate decimalDegrees(Matcher matcher) {
        double lat = Double.parseDouble(matcher.group(1));
        lat *= matcher.group(2).charAt(0) == 'N' ? 1 : -1;
        double longitude = Double.parseDouble(matcher.group(3));
        longitude *= matcher.group(4).charAt(0) == 'E' ? 1 : -1;
        if (Double.isFinite(lat) && Double.isFinite(longitude)) {
            return new Coordinate(lat, longitude);
        } else {
            return null;
        }
    }
    private static Coordinate floatingPoint(Matcher matcher) {
        double lat = Double.parseDouble(matcher.group(1));
        double longitude = Double.parseDouble(matcher.group(2));
        if (Double.isFinite(lat) && Double.isFinite(longitude)) {
            return new Coordinate(lat, longitude);
        } else {
            return null;
        }
    }
    private static class CoordinateFormat {
        private final Pattern pattern;
        private final Function<Matcher, Coordinate> function;

        CoordinateFormat(String regex, Function<Matcher, Coordinate> function) {
            this.pattern = Pattern.compile(regex);
            this.function = function;
        }

        Coordinate attempt(String input) {
            Matcher matcher = pattern.matcher(input);
            if (matcher.matches()) {
                return function.apply(matcher);
            } else {
                return null;
            }
        }
    }
}
