package com.tripco.t08.trip;


import com.tripco.t08.util.SqlUtils;

import java.sql.*;

import java.util.Arrays;
import java.util.List;

public class Config {

    public String type = "config";
    public int version = 3;
    public static Filter[] filters= new Filter[]{ new Filter("type", "SELECT DISTINCT type FROM airports ", "type"),
            new Filter("country","SELECT DISTINCT NAME FROM country ORDER BY NAME","name"),
            new Filter("continent", "SELECT DISTINCT NAME FROM continents ORDER BY NAME", "name")};
    public String map = "[\"svg\", \"kml\"]";
    public int optimization = 2;
    public String optimizations = "[{ \"label\" : \"1opt\", \"description\" : \"1-opt ...\" }, " +
            "{\"label\" : \"2opt\", \"description\" : \"2-opt ...\" }]";
    public String units = "[\"kilometers\",\"miles\",\"nautical miles\",\"user defined\"]";

    /**
     *Loops through each filter and queries them.
     */
    public static void queryAttributes() {
        for (Filter filter: filters
                ) {
            queryFilters(filter);
        }
    }

    /**
     *Executes sql query from every filter.
     * @param filter The array of Filter objects
     */
    private static void queryFilters(Filter filter){
        String queryFilter = filter.query;

        List<String> values = SqlUtils.getJdbi().withHandle(handle ->
                handle.createQuery(queryFilter).mapTo(String.class).list()
        );
        filter.values.addAll(values);

    }

    /**
     * Printing the result from each of the queries.
     * @param args command-line arguments.
     */
    public static void main(String[] args) {
        Config config = new Config();
        config.queryAttributes();
        System.out.println(Arrays.toString(filters));
    }

}
