package com.tripco.t08.trip;

public class Tripv3 extends TripCommon {
    private Optionsv3 options;
    private int version = 3;
    @Override
    Options getOptions() {
        return options;
    }
}
