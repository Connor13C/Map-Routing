package com.tripco.t08.trip;

import java.util.ArrayList;


public class Filter {
    public String attribute;
    public ArrayList<String> values = new ArrayList<>();


    public Filter(String attribute, ArrayList<String> values) {
        this.attribute = attribute;
        this.values = values;
    }

    /**
     * Default constructor.
     */
    public Filter(){

    }

    public String getAttribute() {
        return attribute;
    }

    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }

    public ArrayList<String> getValues() {
        return values;
    }

    public void setValues(ArrayList<String> values) {
        this.values = values;
    }

    @Override
    public String toString() {
        return "Filter{"
                + "attribute='" + attribute + '\''
                + ", values=" + values
                + '}';
    }
}
