package com.tripco.t08.planner;

import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.tripco.t08.util.CoordinateParser;

import java.io.IOException;

import static java.lang.Math.*;

/**
 * Describes the places to visit in a trip in TFFI format.
 * There may be other attributes of a place, but these are required to plan a trip.
 */
public class Place {
  private final String id;
  private final String name;
  private final double latitude;
  private final double longitude;

  /**
   * Constructs a new place with the specified fields.
   *
   * @param id id of the place
   * @param name name of the place
   * @param latitude latitude of the place[-180,180]
   * @param longitude longitude of the place[-180,180]
   * @throws IllegalArgumentException if any of the parameters are null
   */
  public Place(String id, String name, double latitude, double longitude) throws IllegalArgumentException {
    this.id = checkNull(id, "Id must be specified");
    this.name = checkNull(name, "Name must be specified");
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * Gets the distance between this Place and {@code other} in miles.
   *
   * @param other the non-null other place
   * @return the distance between the places
   */
  public double distanceTo(Place other) {
    return this.distanceTo(other, DistanceUnit.MILES);
  }

  /**
   * Gets the distance between this Place and {@code other} in
   * the specified {@code unit}.
   * @param other the other Place
   * @param unit the non-null unit to convert the output to
   * @return the distance between this place and {@code other}, rounded to
   *     the nearest integer. If {@code other} is null, then the distance
   *     is -1.
   */
  public int distanceTo(Place other, DistanceUnit unit) {
    if (other == null) {
      return -1;
    } else {
      double destLat = toRadians(other.getLatitude());
      double destLong = toRadians(other.getLongitude());
      double sourceLat = toRadians(this.getLatitude());
      double sourceLong = toRadians(this.getLongitude());
      double x = cos(destLat)* cos(destLong)- cos(sourceLat)* cos(sourceLong);
      double y = cos(destLat)* sin(destLong)- cos(sourceLat)* sin(sourceLong);
      double z = sin(destLat)- sin(sourceLat);
      double c = sqrt(pow(x,2)+ pow(y,2)+ pow(z,2));
      double rho = 2* asin(c/2);
      double d = round(unit.getConversionFactor() * rho);
      return (int)d;
    }
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public double getLatitude() {
    return latitude;
  }

  public double getLongitude() {
    return longitude;
  }


  private static <T> T checkNull(T value, String message) {
    if (value == null) {
      throw new IllegalArgumentException(message);
    }
    return value;
  }

  public static class Serializer extends TypeAdapter<Place> {
    @Override
    public void write(JsonWriter jsonWriter, Place place) throws IOException {
      jsonWriter.beginObject();
      jsonWriter.name("id").value(place.getId());
      jsonWriter.name("name").value(place.getName());
      // lat and long are strings, even if they're numeric values
      jsonWriter.name("latitude").value(String.valueOf(place.getLatitude()));
      jsonWriter.name("longitude").value(String.valueOf(place.getLongitude()));
      jsonWriter.endObject();
    }

    @Override
    public Place read(JsonReader jsonReader) throws IOException {
      String id = null;
      String name = null;
      Double latitude = null;
      Double longitude = null;
      jsonReader.beginObject();
      while (jsonReader.hasNext()) {
        switch (jsonReader.nextName()) {
          case "id":
            id = jsonReader.nextString();
            break;
          case "name":
            name = jsonReader.nextString();
            break;
          case "latitude":
            latitude = CoordinateParser.parse(jsonReader.nextString());
            break;
          case "longitude":
            longitude = CoordinateParser.parse(jsonReader.nextString());
            break;
          default: break;
        }
      }
      jsonReader.endObject();
      checkNull(latitude, "Latitude must be specified");
      checkNull(longitude, "Longitude must be specified.");
      return new Place(id, name, latitude, longitude);
    }

  }
}
