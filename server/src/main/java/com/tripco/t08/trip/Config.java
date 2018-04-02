package com.tripco.t08.trip;


import java.sql.*;
public class Config {

    public String type = "config";
    public int version = 3;
    public static Filter filters[]= new Filter[]{ new Filter ("type", "SELECT DISTINCT type FROM airports ", "type"),
            new Filter("country","SELECT DISTINCT NAME FROM country ORDER BY NAME","name"),
            new Filter("continent", "SELECT DISTINCT NAME FROM continents ORDER BY NAME", "name")};
    public String map = "[\"svg\", \"kml\"]";
    public int optimization = 2;
    public String optimizations = "[{ \"label\" : \"1opt\", \"description\" : \"1-opt ...\" }, {\"label\" : \"2opt\", \"description\" : \"2-opt ...\" }]";
    public String units = "[\"kilometers\",\"miles\",\"nautical miles\",\"user defined\"]";

    /**
     *
     */
    public void queryAttributes() {
        for (Filter filter: filters
             ) {
            queryFilters(filter);
        }
    }

    /**
     *Executes sql query from every filter
     * @param filter
     */
    private static void queryFilters(Filter filter){
        String queryFilter = filter.query;

        String myUrl = "jdbc:mysql://faure.cs.colostate.edu/cs314";


        // connect to the database and query
        try (Connection conn = DriverManager.getConnection(myUrl, "cs314-db", "eiK5liet1uej");
             Statement stQuery = conn.createStatement();
             ResultSet rsQuery = stQuery.executeQuery(queryFilter);

        ) {

            storeResult(rsQuery, filter);
        } catch (SQLException e1) {
            e1.printStackTrace();
        }

    }

    /**
     *takes the result from queryFilters and stores them in the Filter object Arraylist
     *
     * @param rsQuery1
     * @param filter
     * @throws SQLException
     */
    private static void storeResult(ResultSet rsQuery1, Filter filter) throws SQLException {

        // iterate through query results and print out the airport codes
        while (rsQuery1.next()) {
            filter.values.add(rsQuery1.getString(filter.column));
        }
    }

}
