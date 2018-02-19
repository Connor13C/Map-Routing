package com.tripco.t08.planner;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class SvgBuilder {

    class MapObject {
        private final double coTopLat = 41.0;
        private final double coBottomLat = 37.0;
        private final double coLeftLong = -109.05;
        private final double coRightLong = -102.05;
        private double x;
        private double y;

        public MapObject(double x, double y) {
            this.x = x;
            this.y = y;
        }

        public MapObject(Coordinate c){
            MapObject temp = this.coordinateToMap(c);
            this.x = temp.getX();
            this.y = temp.getY();
        }

        public double getX() {
            return x;
        }

        public double getY() {
            return y;
        }

        private MapObject coordinateToMap(Coordinate c){
            double percentX;
            double percentY;

            percentX = (c.getLongitude()-coLeftLong)/(coRightLong-coLeftLong);
            percentY = (c.getLatitude()-coTopLat)/(coBottomLat-coTopLat);

            return new MapObject(percentX*990, percentY*707);
        }
    }

    private List<MapObject> mapObjects = new ArrayList<>();
    private String svgString;

    //Constructor
    public SvgBuilder(List<Coordinate> coordinates){
        for (Coordinate coordinate : coordinates) {
            mapObjects.add(new MapObject(coordinate));
        }
        svgString = readFile();

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

    //Generates String That Will Be Returned
    private String readFile(){
        StringBuilder s = new StringBuilder();
        InputStream stream = SvgBuilder.class.getClassLoader().getResourceAsStream("svgOfCO");
        //System.out.println("Stream: " + stream);
        Scanner scan = new Scanner(stream);
        while(scan.hasNext()){
            String temp = scan.next();
            if(temp.equals("POINTSGOHERE")){
                s.append(this.mapObjectsToString());
            }
            else{
                s.append(temp).append(" ");
            }


        }
        scan.close();

        return s.toString();
    }

    //Accessor For SVG
    public String getSvgString() {
        return svgString;
    }
}
