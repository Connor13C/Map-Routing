package com.tripco.t08.planner;

import static java.lang.Math.*;

public class DistanceCalc {

    /**
     *
     * @param source Coordinate of the originating place
     * @param dest Coordinate of the destination place
     * @param unit Distance unit in mile or kilometer in a double
     * @return The distance between the two coordinates is returned rounded to the nearest integer
     */
    public static double distanceTo(Coordinate source, Coordinate dest, DistanceUnit unit) {
        if (source == null || dest == null) {
            return -1;
        }
        else {
            double destLat = toRadians(dest.getLatitude());
            double destLong = toRadians(dest.getLongitude());
            double sourceLat = toRadians(source.getLatitude());
            double sourceLong = toRadians(source.getLongitude());
            double x = cos(destLat)* cos(destLong)- cos(sourceLat)* cos(sourceLong);//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
            double y = cos(destLat)* sin(destLong)- cos(sourceLat)* sin(sourceLong);//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
            double z = sin(destLat)- sin(sourceLat);//sin(Theta2)-sin(Theta1)
            double c = sqrt(pow(x,2)+ pow(y,2)+ pow(z,2));//sqrt(x^2+y^2+z^2)
            double rho = 2* asin(c/2);//2arcsin(C/2)
            double d = round(unit.getConversionFactor() * rho);//radius*central angle (in miles km would be 6371.0088)
            return (int)d;
        }
    }
}
