package com.tripco.t08.trip;


import com.tripco.t08.util.SqlUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Config {

    private String type;
    private int version;
    private List<Filter> filters;
    private List<String> maps;
    private int optimization;
    private List<OptimizationDescription> optimizations;
    private List<String> units;

    /**
     * Make config object dynamically from database.
     * Follows the TFFI format.
     */
    public Config() {
        this.type = "config";
        this.version = 3;
        setFilters();
        this.maps = Arrays.asList("svg", "kml");
        this.optimization = 2;
        setOptimizations();
        this.units = Arrays.asList("kilometers", "miles", "nautical miles", "user defined");
    }

    private void setFilters(){
        String[] query = {"SELECT DISTINCT type FROM airports",
                "SELECT DISTINCT name FROM country",
                "SELECT DISTINCT name FROM continents",
                "SELECT DISTINCT name FROM region"
        };
        List<String> values;
        Filter filterType;
        ArrayList<Filter> filters = new ArrayList<>();
        int index = 0;
        String[] type = {"type", "country", "continents", "region"};
        for (String i:query
             ) {
            values = SqlUtils.getJdbi().withHandle(handle ->
                    handle.createQuery(i).mapTo(String.class).list());
            filterType = new Filter(type[index], values);
            filters.add(filterType);
            ++index;
        }
        this.filters = filters;
    }

    private void setOptimizations() {
        OptimizationDescription opt1 = new OptimizationDescription("1opt", "1opt");
        OptimizationDescription opt2 = new OptimizationDescription("2opt", "2opt");
        this.optimizations = Arrays.asList(opt1, opt2);
    }

    public String getType() {
        return type;
    }

    public int getVersion() {
        return version;
    }

    public List<Filter> getFilters() {
        return filters;
    }

    public List<String> getMaps() {
        return maps;
    }

    public int getOptimization() {
        return optimization;
    }

    public List<OptimizationDescription> getOptimizations() {
        return optimizations;
    }

    public List<String> getUnits() {
        return units;
    }

    @Override
    public String toString() {
        return "Config{"
               + "type='" + type + '\''
               + ", version=" + version
               + ", filters=" + filters
               + ", map=" + maps
               + ", optimization=" + optimization
               + ", optimizations=" + optimizations
               + ", units=" + units
               + '}';
    }

}
