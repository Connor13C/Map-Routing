package com.tripco.t08.trip;

import com.tripco.t08.optimize.Optimization;
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
    this.places = Optimization.getOptimization(opt).optimize(places);
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
