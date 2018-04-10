package com.tripco.t08.optimize;

import com.tripco.t08.planner.CommonUnit;
import org.junit.Test;

public class NearestNeighborTest extends AbstractOptimizationTest {

    public NearestNeighborTest() {
        super(new NearestNeighbor());
    }

    @Test
    public void testSimple() {
        test(line(160, 100, 140), line(160, 140, 100));
    }

    @Test
    public void testDifferentStart() {
        test(line(5, 6, 1, 12), line(1, 5, 6, 12));
    }

    @Test
    public void testWorldTour() {
        testFile("world_tour_4_6_2018.json", 137417, CommonUnit.KILOMETERS);
    }

    @Test
    public void testSprint4Deploy1() {
        testFile("sp4deploy1.json", 2399, CommonUnit.MILES);
    }

    @Test
    public void testSprint4Deploy2() {
        testFile("sp4deploy2.json", 139928, CommonUnit.KILOMETERS);
    }

    @Test
    public void testConsidersSecond() {
        test(line(1, 6, 5, 12), line(1, 5, 6, 12));
    }

    @Test
    public void testConsidersLast() {
        test(line(12, 6, 5, 1), line(1, 5, 6, 12));
    }
}
