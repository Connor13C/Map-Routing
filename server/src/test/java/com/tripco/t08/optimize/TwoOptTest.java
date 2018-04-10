package com.tripco.t08.optimize;

import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.Place;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class TwoOptTest extends AbstractOptimizationTest {
    public TwoOptTest() {
        super(new TwoOpt());
    }

    @Test
    public void testAsGoodAsNN() {
        test(line(5, 6, 1, 12), line(1, 5, 6, 12));
    }

    @Test
    public void testWorldTour() {
        testFile("world_tour_4_6_2018.json", 127622, CommonUnit.KILOMETERS);
    }

    @Test
    public void testSprint4Deploy1() {
        testFile("sp4deploy1.json", 2178, CommonUnit.MILES);
    }

    @Test
    public void testSprint4Deploy2() {
        testFile("sp4deploy2.json", 120199, CommonUnit.KILOMETERS);
    }

    @Test
    public void removeCross() {
        List<Place> places = list(
                place("100", "100"),
                place("110", "110"),
                place("85", " 110"),
                place("120", "85"),
                place("125", "85")
        );
        List<Place> expected = list(
                place("100", "100"),
                place("110", "110"),
                place("125", "85"),
                place("120", "85"),
                place("85", "110")
        );
        NearestNeighbor nn = new NearestNeighbor();
        TwoOpt opt = new TwoOpt();

        Assert.assertTrue("TwoOpt was better", doOpt(opt, places).getDistance() < doOpt(nn, places).getDistance());

        Assert.assertThat(ParallelOptimization.rebuildTrip(doOpt(opt, places)), new TripMatcher(expected));
    }

    private OptimizedTrip doOpt(ParallelOptimization opt, List<Place> places) {
        return opt.doOptimize(PlaceTable.createTables(places));
    }
}
