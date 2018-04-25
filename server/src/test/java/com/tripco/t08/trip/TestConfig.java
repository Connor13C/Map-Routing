package com.tripco.t08.trip;

import com.tripco.t08.SqlRule;
import org.junit.*;
import static org.junit.Assert.*;


public class TestConfig {
    Config config;

    @ClassRule
    public static SqlRule SQL = new SqlRule();


    @Test
    public void testConfig(){
        config = new Config();
        //System.out.println(config.toString());
        assertTrue(config.toString() != null);
        assertTrue(config.getType() != null);
        assertTrue(config.getVersion()>2);
        assertTrue(config.getFilters() != null);
        assertTrue(config.getMap() != null);
        assertTrue(config.getOptimization() > 0);
        assertTrue(config.getOptimizations() != null);
        assertTrue(config.getUnits() != null);
    }

}
