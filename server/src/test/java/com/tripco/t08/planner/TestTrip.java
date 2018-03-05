package com.tripco.t08.planner;


import com.tripco.t08.util.CoordinateParser;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.util.ArrayList;
import java.util.Collections;

import static org.junit.Assert.*;

/*
  This class contains tests for the Trip class.
 */
@RunWith(JUnit4.class)
public class TestTrip {
  Trip trip;

  // Setup to be done before every test in TestPlan
  @Before
  public void initialize() {
    trip = new Trip();
    trip.places = new ArrayList<>();
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
  /*
  @Test
  public void testDistances() {
    trip.plan();
    ArrayList<Integer> expectedDistances = new ArrayList<Integer>();
    Collections.addAll(expectedDistances, 12, 23, 34, 45, 65, 19);
    // Call the equals() method of the first object on the second object.
    assertEquals(expectedDistances, trip.distances);
  }*/
  private static Place place(String lat, String longitude) {
    return new Place("t", "test place", CoordinateParser.parse(lat), CoordinateParser.parse(longitude));
  }
}
