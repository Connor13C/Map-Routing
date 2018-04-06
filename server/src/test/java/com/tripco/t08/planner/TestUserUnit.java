package com.tripco.t08.planner;

import org.junit.Test;

import static org.junit.Assert.*;

public class TestUserUnit {

    @Test
    public void TestUserUnit(){
        UserUnit customUnit = new UserUnit(35000);
        assertEquals(35000, customUnit.getConversionFactor(), 0.1);
    }
}
