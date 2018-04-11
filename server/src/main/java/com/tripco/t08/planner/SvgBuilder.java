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
        try (InputStream is = SvgBuilder.class.getClassLoader().getResourceAsStream("world.svg")) {
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
        for (int i = 0; i < mapObjects.size(); i++) {
            s.append(mapObjects.get(i).getX()).append(",").append(mapObjects.get(i).getY()).append(" ");
            if(i - 2 < mapObjects.size()){
                if((mapObjects.get(i).getX() - mapObjects.get(i + 1).getX()) > 180){
                    s.append(this.loopFromLeft(mapObjects.get(i), mapObjects.get(i + 1)));
                }
                else if((mapObjects.get(i).getX() - mapObjects.get(i + 1).getX()) < -180){
                    s.append(this.loopFromRight(mapObjects.get(i), mapObjects.get(i+1)));
                }
            }//Also Needs To Compare The First And Last Index
        }
        if(mapObjects.size() > 0) {
            s.append(mapObjects.get(0).getX()).append(",").append(mapObjects.get(0).getY()).append(" ");
        }
        return s.toString();
    }

    private String loopFromRight(MapObject current, MapObject next){
        String ret = "";
        ret.app
        return null;
    }

    private String loopFromLeft(MapObject current, MapObject next){
        String ret = "";

        return null;
    }

    /**
     * Generates an SVG with all the provided parameters.
     * @return svg
     */
    public String build() {
        return TEMPLATE.replace("POINTSGOHERE", mapObjectsToString());
    }

    private static class MapObject {
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
            double latitude = place.getLatitude();
            double longitude = place.getLongitude();

            if(latitude < 0){
                latitude = Math.abs(latitude) + 90;
            }else if(latitude > 0){
                latitude = 90 - latitude;
            }else{
                latitude = 180;
            }

            if(longitude < 0){
                longitude = 180 - Math.abs(longitude);
            }else if(longitude > 0){
                longitude = longitude + 180;
            }else{
                longitude = 90;
            }


            percentX = (latitude)/(180);
            percentY = (longitude)/(360);

            return new MapObject(percentY*1025, percentX*525);
        }
    }
}
