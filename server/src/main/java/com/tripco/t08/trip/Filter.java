package com.tripco.t08.trip;

import java.util.ArrayList;
import java.util.Arrays;

public class Filter {
    public String attribute;
    public ArrayList<String> values = new ArrayList<>();
    public transient String query;
    public transient String column;


    /**
     * Filter constructor.
     * @param attribute attribute to filter on.
     * @param query SQL query to be executed.
     * @param column Column in table to apply filter to.
     */
    public Filter(String attribute, String query, String column){
        this.attribute = attribute;
        this.query = query;
        this.column = column;
    }

    @Override
    public String toString(){
        return String.format("attribute: %s\nquery: %s\nvalues: %s\n", attribute, query, values);
    }
}
