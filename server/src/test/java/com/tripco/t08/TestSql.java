package com.tripco.t08;

import com.tripco.t08.planner.Airports;
import com.tripco.t08.planner.Place;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Ignore;
import org.junit.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.Assert.*;

@Ignore
public class TestSql {
    private static final List<String> EMPTY = Collections.emptyList();
    @ClassRule
    public static SqlRule SQL = new SqlRule();

    private Airports airports;

    @Before
    public void init() {
        airports = SQL.onDemand(Airports.class);

    }

    @Test
    public void testTableExists() {
        int count = SQL.getJdbi().withHandle(h ->
            h.createQuery("select COUNT(*) from airports;").mapTo(Integer.class).findOnly()
        );
        assertTrue("Failed to initialize test data", count > 0);
    }

    @Test
    public void testNoFilters() {
        List<Place> filtered = airports.filter("%denver%", EMPTY, EMPTY, EMPTY);
        assertTrue(filtered.size() > 0);
    }

    @Test
    public void testSingleContinent() {
        List<Place> places = airports.filterByContinent("%", Arrays.asList("Africa"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            assertEquals("AF", place.getExtra().get("continent"));
        }
    }

    @Test
    public void testTwoContinents() {
        List<Place> places = airports.filterByContinent("%", Arrays.asList("Africa", "North America"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            String continent = place.getExtra().get("continent");
            assertTrue("AF".equals(continent) || "NA".equals(continent));
        }
    }

    @Test
    public void testOneType() {
        List<Place> places = airports.filterByType("%", Arrays.asList("small_airport"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            assertEquals("small_airport", place.getExtra().get("type"));
        }
    }

    @Test
    public void testTwoTypes() {
        List<Place> places = airports.filterByType("%", Arrays.asList("small_airport", "heliport"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            String type = place.getExtra().get("type");
            assertTrue("small_airport".equals(type) || "heliport".equals(type));
        }
    }

    @Test
    public void testOneCountry() {
        List<Place> places = airports.filterByCountry("%", Arrays.asList("United States"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            assertEquals("US", place.getExtra().get("iso_country"));
        }
    }

    @Test
    public void testTwoCountires() {
        List<Place> places = airports.filterByCountry("%", Arrays.asList("United States", "Canada"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            String country = place.getExtra().get("iso_country");
            assertTrue("US".equals(country) || "CA".equals(country));
        }
    }

    @Test
    public void testAllThree() {
        List<Place> places = airports.filter("%",
                Arrays.asList("heliport"),
                Arrays.asList("United States", "Belarus"),
                Arrays.asList("North America", "Africa"));
        assertTrue(places.size() > 0);
        for (Place place : places) {
            assertEquals("heliport", place.getExtra().get("type"));
            assertEquals("US", place.getExtra().get("iso_country"));
            assertEquals("NA", place.getExtra().get("continent"));
        }
    }

    @Test
    public void testSearchName(){
        List a = airports.searchName("%denver%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchType(){
        List a = airports.searchType("%large%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchMunicipality(){
        List a = airports.searchMunicipality("%victor%");
        assertTrue(a.size()>0);
    }

    @Test
    public void testSearchEverything() {
        List a = airports.searchEverything("%denver%");
        assertTrue(a.size()>0);
    }


}
