package com.tripco.t08.optimize;

import com.google.gson.JsonObject;
import com.tripco.t08.planner.CommonUnit;
import com.tripco.t08.planner.Place;
import com.tripco.t08.trip.Trip;
import com.tripco.t08.trip.Tripv2;
import com.tripco.t08.util.CoordinateParser;
import org.junit.Assert;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public abstract class AbstractOptimizationTest {
    private final Optimization optimization;

    protected AbstractOptimizationTest(Optimization optimization) {
        this.optimization = optimization;
    }

    @Test
    public void testEmpty() {
        test(new ArrayList<>(), new ArrayList<>());
    }

    @Test
    public void testOne() {
        test(list(place("90","90")), list(place("90","90")));
    }

    @Test
    public void testTwo() {
        test(line(1,2), line(1,2));
    }
    @Test
    public void testKeepBest() {
        test(list(place("10", "90"),
                place("20", "90"),
                place("30", "90"),
                place("40", "90")),
                list(place("10", "90"),
                        place("20", "90"),
                        place("30", "90"),
                        place("40", "90"))
        );
    }

    protected void testFile(String fileName, double expectedDistance) {
        try (Reader reader = new InputStreamReader(getClass().getClassLoader().getResourceAsStream(fileName))) {
            Tripv2 obj = Trip.GSON.fromJson(reader, Tripv2.class);
            List<Place> optimized = this.optimization.optimize(obj.places);
            Assert.assertEquals("Same result as Dave", expectedDistance, cumulative(optimized), 1);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    protected void test(List<Place> input, List<Place> expected) {
        Assert.assertThat("Failed to find ideal trip", optimization.optimize(input), new TripMatcher(expected));
    }

    protected static double cumulative(List<Place> places) {
        if (places.size() < 2) {
            return 0;
        }
        double dist = 0;
        for (int i = 0; i< places.size()-1; i++) {
            dist += places.get(i).distanceTo(places.get(i+1), CommonUnit.KILOMETERS);
        }
        dist += places.get(0).distanceTo(places.get(places.size()-1), CommonUnit.KILOMETERS);
        return dist;
    }


    protected static List<Place> line(int...points) {
        return IntStream.of(points).mapToObj(i -> new Place(i, 0)).collect(Collectors.toList());
    }

    protected static List<Place> list(Place...places) {
        return Arrays.asList(places);
    }

    protected static Place place(String lat, String longitude) {
        return new Place("t", "test place", CoordinateParser.parse(lat), CoordinateParser.parse(longitude));
    }

}
