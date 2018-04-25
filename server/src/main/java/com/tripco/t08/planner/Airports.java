package com.tripco.t08.planner;

import java.util.ArrayList;
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
            + "INNER JOIN region ON airports.iso_region = region.id "
            + "WHERE (airports.type LIKE :search "
            + "OR airports.name LIKE :search "
            + "OR airports.municipality LIKE :search) "
            + "<if(useTypes)> AND airports.type IN (<types>) <endif>"
            + "<if(useCountries)> AND country.name IN (<countries>) <endif>"
            + "<if(useContinents)> AND continents.name IN (<continents>) <endif>"
            + "<if(useRegions)> AND region.name IN (<regions>) <endif> "
            + "<if(hasLimit)> LIMIT :limit <endif>;")
    List<Place> filter(@Bind("search") String search,
                         @Define("useTypes") boolean useTypes,
                         @BindList(value = "types", onEmpty = VOID) List<String> types,
                         @Define("useCountries") boolean useCountries,
                         @BindList(value = "countries", onEmpty = VOID) List<String> countries,
                         @Define("useContinents") boolean useContinents,
                         @BindList(value = "continents", onEmpty = VOID) List<String> continents,
                         @Define("useRegions") boolean useRegions,
                         @BindList(value = "regions", onEmpty = VOID) List<String> regions,
                         @Define("hasLimit") boolean hasLimit,
                         @Bind("limit") int limit
                       );

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
     * @deprecated use {@link #filter(String, FilterCriteria)} instead
     */
    @Deprecated
    default List<Place> filter(String search,
                               List<String> types,
                               List<String> countries,
                               List<String> continents) {
        return filter(search,
                !types.isEmpty(), types,
                !countries.isEmpty(), countries,
                !continents.isEmpty(), continents,
                false, Collections.emptyList(),
                false,
                0);
    }

    default List<Place> filter(String search, FilterCriteria criteria) {
        return filter(search,
                criteria.hasTypes(), criteria.getTypes(),
                criteria.hasCountries(), criteria.getCountries(),
                criteria.hasContinents(), criteria.getContinents(),
                criteria.hasRegions(), criteria.getRegions(),
                criteria.hasLimit(), criteria.getLimit()
        );
    }

    @Deprecated
    default List<Place> filterByContinent(String search, List<String> continents) {
        return filter(search, EMPTY, EMPTY, continents);
    }

    @Deprecated
    default List<Place> filterByType(String search, List<String> types) {
        return filter(search, types, EMPTY, EMPTY);
    }

    @Deprecated
    default List<Place> filterByCountry(String search, List<String> countries) {
        return filter(search, EMPTY, countries, EMPTY);
    }

    class FilterCriteria {
        private final int limit;
        private List<String> types = new ArrayList<>();
        private List<String> countries = new ArrayList<>();
        private List<String> continents = new ArrayList<>();
        private List<String> regions = new ArrayList<>();

        public FilterCriteria() {
            this(0);
        }

        public FilterCriteria(int limit) {
            this.limit = limit;
        }

        public void addType(String type) {
            this.types.add(type);
        }

        public void addTypes(List<String> types) {
            this.types.addAll(types);
        }

        public void addCountry(String country) {
            this.countries.add(country);
        }

        public void addCountries(List<String> countries) {
            this.countries.addAll(countries);
        }

        public void addContinent(String continent) {
            this.continents.add(continent);
        }

        public void addContinents(List<String> continents) {
            this.continents.addAll(continents);
        }

        public void addRegion(String region) {
            this.regions.add(region);
        }

        public void addRegions(List<String> regions) {
            this.regions.addAll(regions);
        }

        public boolean hasLimit() {
            return limit != 0;
        }

        public int getLimit() {
            return limit;
        }

        public boolean hasTypes() {
            return !types.isEmpty();
        }

        public boolean hasCountries() {
            return !countries.isEmpty();
        }

        public boolean hasContinents() {
            return !continents.isEmpty();
        }

        public boolean hasRegions() {
            return !regions.isEmpty();
        }

        public List<String> getTypes() {
            return types;
        }

        public List<String> getCountries() {
            return countries;
        }

        public List<String> getContinents() {
            return continents;
        }

        public List<String> getRegions() {
            return regions;
        }
    }
}
