package com.tripco.t08.planner;


import com.tripco.t08.trip.Tripv2;
import com.tripco.t08.util.CoordinateParser;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.awt.*;
import java.util.ArrayList;
import java.util.BitSet;

import static org.junit.Assert.*;

/*
  This class contains tests for the Tripv2 class.
 */
@RunWith(JUnit4.class)
public class TestTripv2 {
  Tripv2 trip;

  // Setup to be done before every test in TestPlan
  @Before
  public void initialize() {
    trip = new Tripv2();
    trip.places = new ArrayList<>();
    trip.distances = new ArrayList<>();
  }

  @Test
  public void testOptimize0() {
    Place coordinate1 = place("160.0","0.0");
    Place coordinate2 = place("100.0","0.0");
    Place coordinate3 = place("140.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    trip.optimize(0);
    assertTrue(trip.places.get(0) == coordinate1);
    assertTrue(trip.places.get(1) == coordinate2);
    assertTrue(trip.places.get(2) == coordinate3);
  }

  @Test
  public void testOptimize1() {
    Place coordinate1 = place("160.0","0.0");
    Place coordinate2 = place("100.0","0.0");
    Place coordinate3 = place("140.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    trip.optimize(1);
    assertTrue(trip.places.get(0) == coordinate1);
    assertTrue(trip.places.get(1) == coordinate3);
    assertTrue(trip.places.get(2) == coordinate2);
  }

  @Test
  public void testOptimize1EqualDistanceCase() {
    Place coordinate1 = place("160.0","0.0");
    Place coordinate2 = place("100.0","0.0");
    Place coordinate3 = place("220.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    trip.optimize(1);
    assertTrue(trip.places.get(0) == coordinate1);
    assertTrue(trip.places.get(1) == coordinate3);
    assertTrue(trip.places.get(2) == coordinate2);
  }

  @Test
  public void testSetDistanceTable(){
    Place coordinate1 = place("1.0","0.0");
    Place coordinate2 = place("2.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    int[][] distTable = new int[trip.places.size()][trip.places.size()];
    trip.setDistTable(distTable, trip.places.size());
    assertEquals(0, distTable[0][0]);
    assertEquals(69, distTable[0][1]);
    assertEquals(69, distTable[1][0]);
    assertEquals(0, distTable[1][1]);
  }

  @Test
  public void testGetBestPath(){

  }

  @Test
  public void testGetNearest(){
    Place coordinate1 = place("0.0","0.0");
    Place coordinate2 = place("3.0","0.0");
    Place coordinate3 = place("1.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    int[][] distTable = new int[trip.places.size()][trip.places.size()];
    trip.setDistTable(distTable, trip.places.size());
    BitSet explored = new BitSet(trip.places.size());
    int[] currentPath = new int[trip.places.size()];
    int[] optimalPath = new int[trip.places.size()];
    int currentMinDist = 4000;
    explored.set(0);
    assertEquals(207,trip.getNearest(explored, currentPath, optimalPath ,currentMinDist, distTable));
    int[] check = {0,2,1};
    assertTrue(check[0]==optimalPath[0]);
    assertTrue(check[1]==optimalPath[1]);
    assertTrue(check[2]==optimalPath[2]);
  }

  @Test
  public void testGetMin(){
    Place coordinate1 = place("40.0","0.0");
    Place coordinate2 = place("100.0","0.0");
    Place coordinate3 = place("220.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    int[][] distTable = new int[trip.places.size()][trip.places.size()];
    trip.setDistTable(distTable, trip.places.size());
    BitSet explored = new BitSet(trip.places.size());
    explored.set(0);
    assertEquals(1,trip.getMin(0, distTable, explored));
    assertEquals(2,trip.getMin(0, distTable, explored));
  }
/*
  @Test
  public void testLegDistances() {
    Place coordinate1 = place("160.0","0.0");
    Place coordinate2 = place("100.0","0.0");
    Place coordinate3 = place("220.0","0.0");
    trip.places.add(coordinate1);
    trip.places.add(coordinate2);
    trip.places.add(coordinate3);
    trip.distances = trip.legDistances();
    ArrayList<Integer> expectedDistances = new ArrayList<>();
    Collections.addAll(expectedDistances, 12, 23, 32);
    // Call the equals() method of the first object on the second object.
    assertEquals(expectedDistances, trip.distances);
  }
*/
  private static Place place(String lat, String longitude) {
    return new Place("t", "test place", CoordinateParser.parse(lat), CoordinateParser.parse(longitude));
  }
}
