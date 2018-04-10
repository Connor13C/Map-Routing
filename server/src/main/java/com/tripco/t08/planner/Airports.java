package com.tripco.t08.planner;

import java.util.Collections;
import java.util.List;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindList;
import org.jdbi.v3.sqlobject.customizer.Define;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.stringtemplate4.UseStringTemplateEngine;

import static org.jdbi.v3.sqlobject.customizer.BindList.EmptyHandling.VOID;

public interface Airports {
    List<String> EMPTY = Collections.emptyList();
    @SqlQuery("SELECT * FROM airports WHERE type LIKE :search LIMIT 20;")
    List<Place> searchType(@Bind("search") String search);

    @SqlQuery("SELECT * FROM airports WHERE name LIKE :search LIMIT 20;")
    List<Place> searchName(@Bind("search") String search);

    @SqlQuery("SELECT * FROM airports WHERE municipality LIKE :search LIMIT 20;")
    List<Place> searchMunicipality(@Bind("search") String search);

    @SqlQuery("SELECT * FROM airports WHERE type "
            + "LIKE :search OR name LIKE :search OR municipality LIKE :search LIMIT 20;")
    List<Place> searchEverything(@Bind("search") String search);

    @UseStringTemplateEngine
    @SqlQuery("SELECT * FROM airports "
            + "INNER JOIN country ON airports.iso_country = country.id "
            + "INNER JOIN continents ON airports.continent = continents.id "
            + "WHERE (airports.type LIKE :search "
            + "OR airports.name LIKE :search "
            + "OR airports.municipality LIKE :search) "
            + "<if(useTypes)> AND airports.type IN (<types>) <endif>"
            + "<if(useCountries)> AND country.name IN (<countries>) <endif>"
            + "<if(useContinents)> AND continents.name IN (<continents>) <endif>"
            + "LIMIT 20;")
    List<Place> filter(@Bind("search") String search,
                         @Define("useTypes") boolean useTypes,
                         @BindList(value = "types", onEmpty = VOID) List<String> types,
                         @Define("useCountries") boolean useCountries,
                         @BindList(value = "countries", onEmpty = VOID) List<String> countries,
                         @Define("useContinents") boolean useContinents,
                         @BindList(value = "continents", onEmpty = VOID) List<String> continents);

    /**
     * Selects place that match the provided search string that are one of
     * the specified types, in one of the specified countries, and in one
     * of the specified continents.  Any of the collections being empty
     * indicates that the filter should not be applied.  For example,
     * if an empty list is passed for types, then airports of any type
     * will be allowed.
     * <p />
     * Note that like all other Airports methods, wildcards are not appended
     * to the search string.  To search for everything that contains "Denver",
     * use the search string "%Denver%".
     *
     * @param search the string to compare names to
     * @param types the types to select, or an empty list for all
     * @param countries the countries to select, or an empty list for all
     * @param continents the continents to select, or an empty list for all
     * @return list of places that match the criteria
     */
    default List<Place> filter(String search,
                               List<String> types,
                               List<String> countries,
                               List<String> continents) {
        return filter(search,
                !types.isEmpty(), types,
                !countries.isEmpty(), countries,
                !continents.isEmpty(), continents);
    }

    default List<Place> filterByContinent(String search, List<String> continents) {
        return filter(search, EMPTY, EMPTY, continents);
    }

    default List<Place> filterByType(String search, List<String> types) {
        return filter(search, types, EMPTY, EMPTY);
    }

    default List<Place> filterByCountry(String search, List<String> countries) {
        return filter(search, EMPTY, countries, EMPTY);
    }
}
