package com.tripco.t08.trip;

import java.util.List;


public class Filter {
    public String attribute;
    public List<String> values;


    public Filter(String attribute, List<String> values) {
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

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
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
