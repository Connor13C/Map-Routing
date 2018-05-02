package com.tripco.t08.trip;

import com.tripco.t08.SqlRule;
import org.junit.*;
import static org.junit.Assert.*;

public class TestOptimizationDescription {


    OptimizationDescription desc = new OptimizationDescription("3pt", "The third optimization level required for this sprint");

    @Test
    public void testSetLabel(){
        desc.setLabel("2opt");
        assertEquals("failure - strings are not equal", "2opt", "2opt");
    }

    @Test
    public void testSetDescription(){
        desc.setDescription("This is the description for 2opt");
        assertEquals("failure - strings are not equal", "This is the description for 2opt", "This is the description for 2opt");
    }

    @Test
    public void testGetLabel(){
        desc.getLabel();
        assertEquals("failure - strings are not equal", "3opt", "3opt");
    }

    @Test
    public void testGetDesc(){
        desc.getDescription();
        assertEquals("failure - strings are not equal", "The third optimization level required for this sprint", "The third optimization level required for this sprint");
    }
}
