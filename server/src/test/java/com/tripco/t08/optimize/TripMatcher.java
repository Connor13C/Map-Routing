package com.tripco.t08.optimize;

import com.tripco.t08.planner.Place;
import org.hamcrest.Description;
import org.hamcrest.TypeSafeMatcher;

import java.util.List;

public class TripMatcher extends TypeSafeMatcher<List<Place>> {
    private final List<Place> optimal;

    TripMatcher(List<Place> optimal) {
        super(List.class);
        this.optimal = optimal;
    }


    @Override
    protected boolean matchesSafely(List<Place> places) {
        return Math.abs(AbstractOptimizationTest.cumulative(places) - AbstractOptimizationTest.cumulative(optimal)) < 0.1;
    }

    @Override
    protected void describeMismatchSafely(List<Place> item, Description mismatchDescription) {
        mismatchDescription.appendValueList("\nExpected trip at least as good as:\n", "\n", "\n", optimal);
        mismatchDescription.appendText("Cumulative: " + AbstractOptimizationTest.cumulative(optimal) + "\n");
        mismatchDescription.appendValueList("Actual trip was:\n", "\n", "\n", item);
        mismatchDescription.appendText("Cumulative: " + AbstractOptimizationTest.cumulative(item) + "\n");

    }

    @Override
    public void describeTo(Description description) {
        description.appendText("Optimized trip");
    }
}
