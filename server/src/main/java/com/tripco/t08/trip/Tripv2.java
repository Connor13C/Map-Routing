package com.tripco.t08.trip;

import com.tripco.t08.planner.Place;

import java.util.ArrayList;
import java.util.BitSet;

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
    int[][] distTable = new int[arraySize][arraySize];
    setDistTable(distTable, arraySize);
    int[] optimalPath = new int[arraySize];
    getBestPath(distTable, optimalPath, arraySize);
    ArrayList<Place> replacementPlaces = new ArrayList<>(arraySize);
    boolean beginPoint = false;
    for(int i=0; i<arraySize; ++i){
      if(optimalPath[i]==0) beginPoint = true;
      if(beginPoint)
      replacementPlaces.add(places.get(optimalPath[i]));
    }
    for(int i=0; optimalPath[i]!=0; ++i)
      replacementPlaces.add(places.get(optimalPath[i]));
    places=replacementPlaces;
  }

  public void setDistTable(int[][] distTable, int arraySize){
    for(int i=0; i<arraySize; ++i){
      for(int j=0; j<arraySize; ++j){
        if(i!=j&&distTable[i][j]==0){
          distTable[i][j] = (int)places.get(i).distanceTo(places.get(j));
          distTable[j][i] = distTable [i][j];
        }
      }
    }
  }

  public void getBestPath(int[][] distTable, int[] optimalPath, int arraySize){
    BitSet explored = new BitSet(arraySize);
    int[] currentPath = new int[arraySize];
    int currentMinDist = Integer.MAX_VALUE;
    for(int i=0; i<arraySize; ++i){
      currentPath[0]=i;
      explored.set(i);
      currentMinDist = getNearest(explored, currentPath, optimalPath, currentMinDist, distTable);
      explored.clear();
    }
  }

  public int getNearest(BitSet explored, int[] currentPath, int[] optimalPath, int currentMinDist, int[][] distTable){
    int cumulativeDist = 0;
    int min = 0;
    for(int i = 0; i<currentPath.length-1; ++i){
      min = getMin(currentPath[i], distTable, explored);
      cumulativeDist+=distTable[currentPath[i]][min];
      currentPath[i+1]=min;
    }
    if(cumulativeDist<currentMinDist){
      for(int i = 0; i<optimalPath.length; ++i)
      optimalPath[i]=currentPath[i];
      return cumulativeDist;
    }
    else{
      return currentMinDist;
    }
  }

  public int getMin(int index, int[][] distTable, BitSet explored){
    int min = Integer.MAX_VALUE;
    int indexOfMin = 0;
    for(int i = 0; i<places.size(); ++i){
      if(!explored.get(i)){
        if(min > distTable[index][i]){
          min = distTable[index][i];
          indexOfMin = i;
        }
      }
    }
    explored.set(indexOfMin);
    return indexOfMin;
  }

  @Override
  public void plan() {
    System.out.println(options.optimization);
    optimize(options.optimization);
    super.plan();
  }


  @Override
  Optionsv2 getOptions() {
    return options;
  }
}
