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

  /**
   * Code will start with the initial starting place which it will add to a new array,
   * then it will check every other place in the array and add the nearest place to the new array,
   * then it will continue by checking the nearest place and adding them into the new array. When
   * it is done it will reset places to be in nearest neighbor format
   */
  public void nearestNeighbor(){
    int arraySize = places.size();
    ArrayList<Place> replacementPlaces = new ArrayList<>(arraySize);
    replacementPlaces.add(places.get(0));
    for(int replPlaceInd = 0; replPlaceInd < arraySize-1; ++replPlaceInd){
      int indexOfMin = -1;
      double min = Double.MAX_VALUE;
      for(int i = 1; i < arraySize; ++i) {
        if(places.get(i)!=null){
          double dist = replacementPlaces.get(replPlaceInd).distanceTo(places.get(i));
          if(dist < min){
            min = dist;
            indexOfMin = i;
          }
        }
      }
      replacementPlaces.add(places.get(indexOfMin));
      places.set(indexOfMin, null);
    }
    places=replacementPlaces;
  }

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
    return new SvgBuilder(places).build();
  }

  /**
   * Returns the distances between consecutive places,
   * including the return to the starting point to make a round trip.
   * @return
   */
  private ArrayList<Integer> legDistances() {
    ArrayList<Integer> dist = new ArrayList<>();
    DistanceUnit distUnit = DistanceUnit.getDistanceUnit(options.distance);

    for(int i = 1; i < places.size(); i++){
      Place previous = places.get(i-1);
      Place current = places.get(i);
      dist.add(Math.round(previous.distanceTo(current, distUnit)));
    }
    Place first = places.get(0);
    Place last = places.get(places.size()-1);
    dist.add(Math.round(first.distanceTo(last, distUnit)));

    return dist;
  }

}
