package com.tripco.t08.trip;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class TestConfig {

    @BeforeClass
    public static void createConfig(){
        if (!System.getProperty("user.name").equals("travis")) {
            Config.queryAttributes();
        }
    }

    @Test
    public void testQueryAttributes1(){
        if(!System.getProperty("user.name").equals("travis")){
            String filter[] = new String[]{"heliport", "small_airport", "seaplane_base", "closed", "balloonport", "medium_airport", "large_airport"};
            assertArrayEquals(filter, Config.filters[0].values.toArray());
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
            String filter[] = new String[]{"Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"};
            assertArrayEquals(filter, Config.filters[2].values.toArray());
        }

    }
}
