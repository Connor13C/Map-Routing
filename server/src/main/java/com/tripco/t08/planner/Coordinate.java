package com.tripco.t08.planner;

import com.tripco.t08.util.CoordinateParser;

import static java.lang.Math.*;

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
    public int distanceTo(Coordinate other, DistanceUnit unit) {
        if (other == null) {
            return -1;
        }
        else {
            double destLat = toRadians(other.getLatitude());
            double destLong = toRadians(other.getLongitude());
            double sourceLat = toRadians(this.getLatitude());
            double sourceLong = toRadians(this.getLongitude());
            double x = cos(destLat)* cos(destLong)- cos(sourceLat)* cos(sourceLong);//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
            double y = cos(destLat)* sin(destLong)- cos(sourceLat)* sin(sourceLong);//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
            double z = sin(destLat)- sin(sourceLat);//sin(Theta2)-sin(Theta1)
            double c = sqrt(pow(x,2)+ pow(y,2)+ pow(z,2));//sqrt(x^2+y^2+z^2)
            double rho = 2* asin(c/2);//2arcsin(C/2)
            double d = round(unit.getConversionFactor() * rho);//radius*central angle (in miles km would be 6371.0088)
            return (int)d;
        }
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
