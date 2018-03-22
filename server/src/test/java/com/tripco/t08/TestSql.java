package com.tripco.t08;

import com.tripco.t08.planner.Airport;
import com.tripco.t08.planner.Airports;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.junit.ClassRule;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class TestSql {
    @ClassRule
    public static SqlRule SQL = new SqlRule();

    @Test
    public void testTableExists() {
        int count = SQL.getJdbi().withHandle(h ->
            h.createQuery("select COUNT(*) from airports;").mapTo(Integer.class).findOnly()
        );
        assertTrue("Failed to initialize test data", count > 0);
    }

    @Test
    public void testTableExistsDao() {
        Airports airports = SQL.onDemand(Airports.class);

    }

    @Test
    public void testSearchName(){
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchName("%denver%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchType(){
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchType("%large%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchMunicipality(){
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchMunicipality("%victor%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchEverything() {
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchEverything("%denver%");
        assertTrue(a.size()>0);
    }


}
