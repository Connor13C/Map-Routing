package com.tripco.t08;

import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.junit.ClassRule;
import org.junit.Test;

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

        assertTrue(airports.getCount() > 0);
    }

    public interface Airports {
        @SqlQuery("select COUNT(*) from airports")
        int getCount();
    }
}
