package com.tripco.t08.planner;

public class DistanceCalc {

    /**
     *
     * @param source Coordinate of the originating place
     * @param dest Coordinate of the destination place
     * @param unit Distance unit in mile or kilometer in a double
     * @return
     */
    public double distanceTo(Coordinate source, Coordinate dest, DistanceUnit unit) {
        if (source == null || dest == null) {
            return -1;
        }
        else {
            double destLat = degreesToRad(dest.getLatitude());
            double destLong = degreesToRad(dest.getLongitude());
            double sourceLat = degreesToRad(source.getLatitude());
            double sourceLong = degreesToRad(source.getLongitude());
            double x = Math.cos(destLat)*Math.cos(destLong)-Math.cos(sourceLat)*Math.cos(sourceLong);//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
            double y = Math.cos(destLat)*Math.sin(destLong)-Math.cos(sourceLat)*Math.sin(sourceLong);//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
            double z = Math.sin(destLat)-Math.sin(sourceLat);//sin(Theta2)-sin(Theta1)
            double c = Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));//sqrt(x^2+y^2+z^2)
            double rho = 2*Math.asin(c/2);//2arcsin(C/2)
            double d = Math.round(unit.getConversionFactor() * rho);//radius*central angle (in miles km would be 6371.0088)
            return (int)d;
        }
    }


    /**
     * Converts a number from degrees to radians
     * @param degree the double in degrees
     * @return
     */
    public double degreesToRad(double degree){//convert float input in degrees to radians
        return (degree/180)*Math.PI;
    }
}
