package com.tripco.t08.planner;

import com.tripco.t08.trip.Filter;
import org.jdbi.v3.core.Handle;

import java.util.List;

public class Queryv3 extends Queryv2 {
    private List<Filter> filters;

    @Override
    public void search(Handle connection) {
        // TODO - use the filters and query based on them instead
        // See https://stackoverflow.com/questions/19424573/how-to-do-in-query-in-jdbi
        // https://skife.org/jdbi/java/2011/12/21/jdbi_in_clauses.html
        super.search(connection);
    }
}
