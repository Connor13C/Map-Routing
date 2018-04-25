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
        List<String> type = new ArrayList<>();
        List<String> country = new ArrayList<>();
        List<String> continent = new ArrayList<>();
        for(int i=0; i<filters.size(); ++i){
            if(filters.get(i).attribute.equals("type")&&type.size()==0){
                type = filters.get(i).values;
            }
            if(filters.get(i).attribute.equals("country")&&country.size()==0){
                country = filters.get(i).values;
            }
            if(filters.get(i).attribute.equals("continent")&&continent.size()==0){
                continent = filters.get(i).values;
            }
        }
        places = airports.filter("%" + query +"%", type, country, continent);
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
