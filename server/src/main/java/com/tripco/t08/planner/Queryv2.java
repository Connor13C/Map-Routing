
package com.tripco.t08.planner;

import org.jdbi.v3.core.Handle;

import java.util.List;

/**
 * The Query class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Queryv2 implements Query {
    // The variables in this class should reflect TFFI.
    public int version;
    public String type;
    public String query;
    public List<Place> places;

    @Override
    public void search(Handle connection) {
        Airports airports = connection.attach(Airports.class);
        places = airports.searchEverything("%"+query+"%");
    }
}
