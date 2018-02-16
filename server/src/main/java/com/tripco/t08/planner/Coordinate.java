package com.tripco.t08.planner;

import com.tripco.t08.util.CoordinateParser;

/**
 * Represents a Coordinate on the globe.
 */
public class Coordinate {

    private final double latitude;
    private final double longitude;

    /**
     * @param latitude the latitude of the coordinate
     * @param longitude the longitude of the coordinate
     */
    public Coordinate(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    /**
     * Gets the distance between this Coordinate and {@code other} in miles.
     *
     * @param other the non-null other coordinate
     * @return the distance between the coordinates
     */
    public double distanceTo(Coordinate other) {
        return this.distanceTo(other, DistanceUnit.MILES);
    }

    /**
     * Gets the distance between this Coordinate and {@code other} in
     * the specified {@code unit}
     * @param other the non-null other Coordinate
     * @param unit the non-null unit to convert the output to
     * @return
     */
    public double distanceTo(Coordinate other, DistanceUnit unit) {
        //TODO - Implement and test me!
        return -1;
    }

    /**
     * Creates a Coordinate from a given place.
     *
     * @see CoordinateParser#parse(String)
     * @param place non-null Place
     * @return the Coordinate representation of the place, or null
     *     if the place did not represent a valid Coordinate.
     */
    public static Coordinate fromPlace(Place place) {
        return CoordinateParser.parse(place.latitude + "  " + place.longitude);
    }



}