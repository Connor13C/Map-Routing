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
        List a = airport.searchName("%buckley%");
        assertEquals("[Airport{id='KBKF', name='Buckley Air Force Base', latitude='39.701698303200004', longitude='-104.751998901'}]",a.toString());
    }

    @Test
    public void testSearchType(){
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchType("%large%");
        assertTrue("Not the right amount of large airports", a.size()==2);
    }

    @Test
    public void testSearchMunicipality(){
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchMunicipality("%victor%");
        assertEquals("[Airport{id='3CO9', name='D B Smith Memorial Heliport', latitude='38.712501525878906', longitude='-105.14199829101562'}]",a.toString());
    }

    @Test
    public void testSearchEverything() {
        Airports airport = SQL.onDemand(Airports.class);
        List a = airport.searchEverything("%denver%");
        assertTrue("There should have been at least 20 results", a.size()==20);
    }


}
