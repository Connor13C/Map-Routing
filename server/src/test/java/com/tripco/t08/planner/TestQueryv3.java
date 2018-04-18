package com.tripco.t08.planner;

import com.tripco.t08.SqlRule;
import com.tripco.t08.trip.Config;
import com.tripco.t08.trip.Filter;
import org.junit.ClassRule;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class TestQueryv3 {
    @ClassRule
    public static SqlRule SQL = new SqlRule();

    @Test
    public void testSearch(){
        Queryv3 query = new Queryv3();
        Filter filter = new Filter("type", "SELECT DISTINCT type FROM airports ", "type");
        ArrayList<String> values = new ArrayList<>();
        values.add("heliport");
        filter.values = values;
        ArrayList<Filter> filters = new ArrayList<>();
        filters.add(filter);
        query.filters = filters;
        SQL.getJdbi().useHandle(query::search);
        System.out.print(query.places);
    }
}
