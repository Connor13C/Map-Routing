package com.tripco.t08.planner;

import com.tripco.t08.trip.Filter;

import java.util.ArrayList;
import java.util.List;

import org.jdbi.v3.core.Handle;

public class Queryv3 implements Query {
    private int version = 3;
    private String type = "query";
    private int limit = 0;
    private String query = "";
    private List<Filter> filters;
    private List<Place> places;

    @Override
    public void search(Handle connection) {
        Airports airports = connection.attach(Airports.class);
        Airports.FilterCriteria criteria = new Airports.FilterCriteria(limit);
        if (filters != null && !filters.isEmpty()) {
            for (int i = 0; i < filters.size(); ++i) {
                if (filters.get(i).attribute.equals("type")) {
                    criteria.addTypes(filters.get(i).values);
                } else if (filters.get(i).attribute.equals("country")) {
                    criteria.addCountries(filters.get(i).values);
                } else if (filters.get(i).attribute.equals("continent")) {
                    criteria.addContinents(filters.get(i).values);
                } else if (filters.get(i).attribute.equals("region")) {
                    criteria.addRegions(filters.get(i).values);
                }
            }
        }
        this.places = airports.filter("%" + query +"%", criteria);
    }

    @Override
    public String toString() {
        return "Queryv3{"
               + "version=" + version
               + ", type=" + type
               + ", limit=" + limit
               + ", query=" + query
               + ", filters=" + filters
               + ", places=" + places
               + '}';
    }
}
