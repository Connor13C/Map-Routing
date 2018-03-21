package com.tripco.t08.planner;


import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.List;

public interface Airports {
    @SqlQuery("SELECT * FROM airports WHERE type LIKE :search LIMIT 20;")
    List<Airport> searchType(String search);

    @SqlQuery("SELECT * FROM airports WHERE name LIKE :search LIMIT 20;")
    List<Airport> searchName(String search);

    @SqlQuery("SELECT * FROM airports WHERE municipality LIKE :search LIMIT 20;")
    List<Airport> searchMunicipality(String search);

    @SqlQuery("SELECT * FROM airports WHERE type LIKE :search OR name LIKE :search OR municipality LIKE :search LIMIT 20;")
    List<Airport> searchEverything(String search);

}
