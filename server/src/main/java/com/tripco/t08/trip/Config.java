package com.tripco.t08.trip;

import java.util.ArrayList;
import java.util.HashMap;

public class Config {
   /* {
        "type"          : "config",
            "version"       : 3,
            "filters"       : [
        { "attribute" : "type",
                "values"    : [ "balloonport","heliport", "airport"]
        }
                    ],
        "maps"          : [ "svg", "kml" ],
        "optimization"  : 2,
            "optimizations" : [
        { "label" : "1opt", "description" : "1-opt ..." },
        { "label" : "2opt", "description" : "2-opt ..." }
                    ]
        "units"         : ["kilometers","miles","nautical miles","user defined"]
    }*/

   public String type = "config";
   public int version = 3;
   public String filters;
   public String  map= "[\"svg\", \"kml\"]";
   public int optimization = 2;
   public String optimzations = "[{ \"label\" : \"1opt\", \"description\" : \"1-opt ...\" }, {\"label\" : \"2opt\", \"description\" : \"2-opt ...\" }]";
   public String units = "[\"kilometers\",\"miles\",\"nautical miles\",\"user defined\"]";


   public ArrayList<Filters> queryAttributes(){

   }
}
