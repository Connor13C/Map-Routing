
package com.tripco.t08.planner;

import java.util.List;

/**
 * The Query class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Query {
    // The variables in this class should reflect TFFI.
    public int version;
    public String type;
    public String query;
    public List<Airport> places;

}
