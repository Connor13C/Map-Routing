package com.tripco.t08.trip;


import com.tripco.t08.optimize.Optimization;
import com.tripco.t08.util.SqlUtils;

import java.sql.*;

import java.util.Arrays;
import java.util.List;

public class Config {

    private String type;
    private int version;
    private List<Filter> filters;
    private List<String> map;
    private int optimization;
    private List<Optimizations> optimizations;
    private List<String> units;

    public Config() {
        this.type = "config";
        this.version = 3;
        setFilters();
        this.map = Arrays.asList("svg", "kml");
        this.optimization = 2;
        setOptimizations();
        this.units = Arrays.asList("kilometers", "miles", "nautical miles", "user defined");
    }

    private void setFilters(){

    }

    private void setOptimizations() {
        Optimizations opt1 = new Optimizations("1opt", "1opt");
        Optimizations opt2 = new Optimizations("2opt", "2opt");
        this.optimizations = Arrays.asList(opt1, opt2);
    }


    @Override
    public String toString() {
        return "Config{"
               + "type='" + type + '\''
               + ", version=" + version
               + ", filters=" + filters
               + ", map=" + map
               + ", optimization=" + optimization
               + ", optimizations=" + optimizations
               + ", units=" + units
               + '}';
    }

    /**
     *Loops through each filter and queries them.
     *
    public static void queryAttributes() {
        for (Filter filter: filters
                ) {
            queryFilters(filter);
        }
    }

    /**
     *Executes sql query from every filter.
     * param filter The array of Filter objects
     *
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
        System.out.println(config.toString());
    }

}
