package com.tripco.t08.planner;

import com.tripco.t08.trip.Filter;

import java.util.ArrayList;
import java.util.List;

import org.jdbi.v3.core.Handle;

public class Queryv3 implements Query {
    public int version = 3;
    public String type = "query";
    public int limit = 0;
    public String query = "";
    public List<Filter> filters;
    public List<Place> places;

    @Override
    public void search(Handle connection) {
        // TODO - use the filters and query based on them instead
        Airports airports = connection.attach(Airports.class);
        Airports.FilterCriteria criteria = new Airports.FilterCriteria(limit);
        for(int i=0; i<filters.size(); ++i){
            if(filters.get(i).attribute.equals("type")){
                criteria.addTypes(filters.get(i).values);
            }
            if(filters.get(i).attribute.equals("country")){
                criteria.addCountries(filters.get(i).values);
            }
            if(filters.get(i).attribute.equals("continent")){
                criteria.addContinents(filters.get(i).values);
            }
            if(filters.get(i).attribute.equals("region")){
                criteria.addRegions(filters.get(i).values);
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
