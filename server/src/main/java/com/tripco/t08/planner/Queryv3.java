package com.tripco.t08.planner;

import com.tripco.t08.trip.Filter;
import org.jdbi.v3.core.Handle;

import java.util.ArrayList;
import java.util.List;

public class Queryv3 extends Queryv2 {
    public int version = 3;
    public List<Filter> filters;

    @Override
    public void search(Handle connection) {
        // TODO - use the filters and query based on them instead
        Airports airports = connection.attach(Airports.class);
        ArrayList<String> type = new ArrayList<>();
        ArrayList<String> country = new ArrayList<>();
        ArrayList<String> continent = new ArrayList<>();
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
        places = airports.filter(query, type, country, continent);
    }
}
