package com.tripco.t08.planner;

import spark.utils.IOUtils;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;


/**
 * Constructs an SVG representing a trip
 */
public class SvgBuilder {
    private static final String TEMPLATE;
    static {
        String file = null;
        try (InputStream is = SvgBuilder.class.getClassLoader().getResourceAsStream("svgOfCO")) {
            file = IOUtils.toString(is);
        } catch (IOException e) {
            e.printStackTrace();
        }
        TEMPLATE = file;
    }
    private final List<MapObject> mapObjects = new ArrayList<>();

    /**
     * Creates an SvgBuilder that draws a route between all specified places in the order
     * that they're provided.
     *
     * @param coordinates non-null list of places
     */
    public SvgBuilder(List<Place> coordinates){
        for (Place coordinate : coordinates) {
            mapObjects.add(MapObject.coordinateToMap(coordinate));
        }
    }

    //Creates String That Will Replace POINTSGOHERE
    private String mapObjectsToString(){
        StringBuilder s = new StringBuilder();
        for (MapObject mapObject : mapObjects) {
            s.append(mapObject.getX()).append(",").append(mapObject.getY()).append(" ");
        }
        if(mapObjects.size() > 0) {
            s.append(mapObjects.get(0).getX()).append(",").append(mapObjects.get(0).getY()).append(" ");
        }
        return s.toString();
    }

    /**
     * Generates an SVG with all the provided parameters.
     * @return svg
     */
    public String build() {
        return TEMPLATE.replace("POINTSGOHERE", mapObjectsToString());
    }

    private static class MapObject {
        private static final double TOP_LAT = 41.0;
        private static final double BOTTOM_LAT = 37.0;
        private static final double LEFT_LONG = -109.05;
        private static final double RIGHT_LONG = -102.05;
        private double x;
        private double y;

        public MapObject(double x, double y) {
            this.x = x;
            this.y = y;
        }

        public double getX() {
            return x;
        }

        public double getY() {
            return y;
        }

        static MapObject coordinateToMap(Place place){
            double percentX;
            double percentY;

            percentX = (place.getLongitude()- LEFT_LONG)/(RIGHT_LONG - LEFT_LONG);
            percentY = (place.getLatitude()- TOP_LAT)/(BOTTOM_LAT - TOP_LAT);

            return new MapObject(percentX*990, percentY*707);
        }
    }
}
