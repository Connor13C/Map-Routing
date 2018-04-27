
package com.tripco.t08.planner;

import org.jdbi.v3.core.Handle;

import java.util.List;

/**
 * The Query class supports TFFI so it can easily be converted to/from Json by Gson.
 *
 */
public class Queryv2 implements Query {
    // The variables in this class should reflect TFFI.
    private int version = 2;
    private String type;
    private String query;
    private List<Place> places;

    @Override
    public void search(Handle connection) {
        Airports airports = connection.attach(Airports.class);
        places = airports.searchEverything("%"+query+"%");
    }

    @Override
    public String toString() {
        return "Queryv2{"
                + "version=" + version
                + ", type=" + type
                + ", query=" + query
                + ", places=" + places
                + '}';
    }
}
