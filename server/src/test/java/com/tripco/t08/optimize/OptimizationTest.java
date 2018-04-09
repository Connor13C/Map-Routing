package com.tripco.t08.optimize;

import org.junit.Test;

import static org.junit.Assert.*;

// Hardcoded for 3 Optimization levels: None, NearestNeighbor, and TwoOpt
public class OptimizationTest {

    @Test
    public void testNone() {
        assertEquals(Optimization.getOptimization(0), Optimization.STRATEGIES.get(0));
    }
    @Test
    public void testFloor() {
        assertEquals(Optimization.getOptimization(0.1), Optimization.STRATEGIES.get(0));
    }

    @Test
    public void testMiddle() {
        assertEquals(Optimization.getOptimization(0.5), Optimization.STRATEGIES.get(1));
    }
    @Test
    public void testMax() {
        assertEquals(Optimization.getOptimization(1), Optimization.STRATEGIES.get(Optimization.STRATEGIES.size()-1));
    }
    @Test(expected = IllegalArgumentException.class)
    public void testInvalid() {
        Optimization.getOptimization(2);
    }
}
