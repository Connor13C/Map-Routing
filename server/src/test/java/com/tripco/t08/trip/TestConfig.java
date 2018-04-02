package com.tripco.t08.trip;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class TestConfig {
    Config config;

    @Before
    public void createConfig(){
        config = new Config();

    }

    @Test
    public void testQueryAttributes1(){
        if(!System.getProperty("user.name").equals("travis")){
            config.queryAttributes();
            String filter[] = new String[]{"heliport", "small_airport", "seaplane_base", "closed", "balloonport", "medium_airport", "large_airport"};
            assertArrayEquals(filter, config.filters[0].values.toArray());
        }

    }

    /*@Test
    public void testQueryAttributes2(){
        config.queryAttributes();
        String filter[] = new String[]{"heliport", "small_airport", "seaplane_base", "closed", "balloonport", "medium_airport", "large_airport"};
        assertArrayEquals(filter, config.filters[1].values.toArray());
    }*/

    @Test
    public void testQueryAttributes3(){
        if(!System.getProperty("user.name").equals("travis")){
            config.queryAttributes();
            String filter[] = new String[]{"Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"};
            assertArrayEquals(filter, config.filters[2].values.toArray());
        }

    }
}
