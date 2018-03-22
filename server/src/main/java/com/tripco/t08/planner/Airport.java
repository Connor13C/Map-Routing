package com.tripco.t08.planner;

import java.beans.ConstructorProperties;

public class Airport {
        private final String id;
        private final String name;
        private final String latitude;
        private final String longitude;

    /**Airport Constructor.
     *
     * @param id the id
     * @param name the name
     * @param latitude the lat
     * @param longitude the long
     */
        @ConstructorProperties({"id", "name", "latitude", "longitude"})
    public Airport(String id, String name, String latitude, String longitude) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    @Override
    public String toString() {
        return "Airport{"
                + "id='" + id + '\''
                + ", name='" + name + '\''
                + ", latitude='" + latitude + '\''
                + ", longitude='" + longitude + '\''
                + '}';
    }
}
