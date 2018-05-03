package com.tripco.t08.trip;

import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

public class TestFilter {
    Filter filter;
    String attrib = "Hey";
    List<String> values = Arrays.asList("you", "there");


    @Test
    public void TestFilterEmpty(){
        filter = new Filter();
        assertTrue(filter.attribute==null);
        assertTrue(filter.values==null);
    }

    @Test
    public void TestFilter(){
        filter = new Filter();
        filter.setAttribute(attrib);
        filter.setValues(values);
        assertTrue(filter.attribute.equals("Hey"));
        assertTrue(filter.values.get(0).equals("you"));
        assertTrue(filter.values.get(1).equals("there"));
    }

    @Test
    public void TestToString(){
        filter = new Filter(attrib, values);
        assertTrue(filter.toString().equals("Filter{attribute='Hey', values=[you, there]}"));
    }
}
