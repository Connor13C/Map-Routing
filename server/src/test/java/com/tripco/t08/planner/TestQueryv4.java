package com.tripco.t08.planner;

import com.tripco.t08.SqlRule;
import com.tripco.t08.trip.Filter;

import java.util.ArrayList;

import static org.junit.Assert.*;
import org.junit.ClassRule;
import org.junit.Test;



public class TestQueryv4 {
    @ClassRule
    public static SqlRule SQL = new SqlRule();

    @Test
    public void testSearch(){
        Queryv4 query = new Queryv4();
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
        Queryv4 query = new Queryv4();
        assertTrue(query.toString().equals("Queryv4{version=4, type=query, limit=0, query=, filters=null, places=null}"));
    }
}
