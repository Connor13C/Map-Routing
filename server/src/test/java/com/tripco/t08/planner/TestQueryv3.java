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
        Filter filter = new Filter("type", "SELECT DISTINCT type FROM airports ", "type");
        ArrayList<String> values = new ArrayList<>();
        values.add("heliport");
        filter.values = values;
        ArrayList<Filter> filters = new ArrayList<>();
        filters.add(filter);
        query.filters = filters;
        SQL.getJdbi().useHandle(query::search);
        assertTrue(query.places.size()>0);
    }

    @Test
    public void testToString(){
        Queryv3 query = new Queryv3();
        assertTrue(query.toString().equals("Queryv3{version=3, filters=null} "
                + "Queryv2{version=2, type=null, query=null, places=null}"));
    }
}
