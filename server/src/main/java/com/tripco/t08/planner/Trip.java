package com.tripco.t08.planner;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * The Trip class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Trip {
  // The variables in this class should reflect TFFI.
  public String type;
  public String title;
  public Option options;
  public ArrayList<Place> places;
  public ArrayList<Integer> distances;
  public String map;


   /** The top level method that does planning.
   * At this point it just adds the map and distances for the places in order.
   * It might need to reorder the places in the future.
   */
  public void plan() {

    this.map = svg();
    this.distances = legDistances();
  }

  /**
   * Returns an SVG containing the background and the legs of the trip.
   * @return SVG
   */
  private String svg() {
    List<Coordinate> coordinates = places.stream().map(Coordinate::fromPlace).collect(Collectors.toList());
    List<Coordinate> coordinatesl = new ArrayList();
    for(Place place : places){
      coordinatesl.add(Coordinate.fromPlace(place));
    }
    SvgBuilder svg = new SvgBuilder(coordinatesl);

    return svg.getSvgString();

    // hardcoded example
    //return "<svg width=\"1920\" height=\"960\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --> <g> <g id=\"svg_4\"> <svg id=\"svg_1\" height=\"960\" width=\"1920\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"svg_2\"> <title>Layer 1</title> <rect fill=\"rgb(119, 204, 119)\" stroke=\"black\" x=\"0\" y=\"0\" width=\"1920\" height=\"960\" id=\"svg_3\"/> </g> </svg> </g> <g id=\"svg_9\"> <svg id=\"svg_5\" height=\"480\" width=\"960\" y=\"240\" x=\"480\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"svg_6\"> <title>Layer 2</title> <polygon points=\"0,0 960,0 960,480 0,480\" stroke-width=\"12\" stroke=\"brown\" fill=\"none\" id=\"svg_8\"/> <polyline points=\"0,0 960,480 480,0 0,480 960,0 480,480 0,0\" fill=\"none\" stroke-width=\"4\" stroke=\"blue\" id=\"svg_7\"/> </g> </svg> </g> </g> </svg>";
  }

  /**
   * Returns the distances between consecutive places,
   * including the return to the starting point to make a round trip.
   * @return
   */
  private ArrayList<Integer> legDistances() {

    ArrayList<Integer> dist = new ArrayList<>();

    for(int i = 0; i < places.size(); i++){
      Coordinate current = Coordinate.fromPlace(places.get(i));
      if(i == 0){
        dist.add(0);
      }
      else if(i != 0 && i < places.size()-1){
        Coordinate next = Coordinate.fromPlace(places.get(i+1));
        dist.add((int) current.distanceTo(next));
      }
    }


    Coordinate first = Coordinate.fromPlace(places.get(0));
    Coordinate last = Coordinate.fromPlace(places.get(places.size()-1));
    dist.add((int)first.distanceTo(last));
    return dist;
  }
}
