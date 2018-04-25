package com.tripco.t08.planner;

import com.tripco.t08.SqlRule;
import com.tripco.t08.trip.Filter;

import java.util.ArrayList;

import static org.junit.Assert.*;
import org.junit.ClassRule;
import org.junit.Test;



public class TestQueryv3 {
    @ClassRule
    public static SqlRule SQL = new SqlRule();

    @Test
    public void testSearch(){
        Queryv3 query = new Queryv3();
        ArrayList<String> values = new ArrayList<>();
        values.add("heliport");
        Filter filter = new Filter("type", values);
        ArrayList<Filter> filters = new ArrayList<>();
        filters.add(filter);
        query.filters = filters;
        SQL.getJdbi().useHandle(query::search);
        assertTrue(query.places.size()>0);
    }

    @Test
    public void testToString(){
        Queryv3 query = new Queryv3();
        assertTrue(query.toString().equals("Queryv3{version=3, type=query, limit=0, query=, filters=null, places=null}"));
    }
}
