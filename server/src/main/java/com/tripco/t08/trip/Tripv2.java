package com.tripco.t08.trip;

import com.tripco.t08.planner.Place;

import java.util.ArrayList;

/**
 * The Tripv2 class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Tripv2 extends TripCommon {
  public Optionsv2 options;
  public int version = 2;


  /**
   * Runs the chosen level of optimization on places.
   * @param opt double choice for opt choice 0 to 1
   */
  public void optimize(double opt){
    if(opt>0.0){
      nearestNeighbor();
    }
  }

  /**
   * Code will start with the initial starting place which it will add to a new array,
   * then it will check every other place in the array and add the nearest place to the new array,
   * then it will continue by checking the nearest place and adding them into the new array. When
   * it is done it will reset places to be in nearest neighbor format
   */
  private void nearestNeighbor(){
    int arraySize = places.size();
    ArrayList<Place> replacementPlaces = new ArrayList<>(arraySize);
    replacementPlaces.add(places.get(0));
    for(int replPlaceInd = 0; replPlaceInd < arraySize-1; ++replPlaceInd){
      int[] indexOfMin = {-1};
      double[] min = {Double.MAX_VALUE};
      for(int i = 1; i < arraySize; ++i) {
        checkMin(min, indexOfMin, replacementPlaces.get(replPlaceInd).distanceTo(places.get(i)), i);
      }
      replacementPlaces.add(places.get(indexOfMin[0]));
      places.set(indexOfMin[0], null);
    }
    places=replacementPlaces;
  }

  /**
   * Helper method for nearest neighbor since code climate is a bitch.
   * Determines if distance to current place is new min, if so keeps the min and its index
   * @param min double array that stores min distance
   * @param indexOfMin index of current low min
   * @param dist distance between the current place and the place at the index in trip.places
   * @param index current index of trip.places
   */
  private void checkMin(double[] min, int[] indexOfMin, double dist, int index){
    if(places.get(index)!=null){
      if(dist < min[0]){
        min[0] = dist;
        indexOfMin[0] = index;
      }
    }
  }

  @Override
  public void plan() {
    optimize(options.optimization);
    super.plan();
  }


  @Override
  Optionsv2 getOptions() {
    return options;
  }
}
