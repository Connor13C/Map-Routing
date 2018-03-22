package com.tripco.t08.trip;

import com.tripco.t08.planner.DistanceUnit;

/**
 * Provides the common options needed by TripCommon.  Regardless of version,
 * every options section provides the DistanceUnit in some way.
 */
public interface Options {
    DistanceUnit getDistanceUnit();
}
