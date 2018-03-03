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

  public Place(String id, String name, double latitude, double longitude) {
    this.id = id;
    this.name = name;
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
   * the specified {@code unit}
   * @param other the non-null other Place
   * @param unit the non-null unit to convert the output to
   * @return
   */
  public int distanceTo(Place other, DistanceUnit unit) {
    if (other == null) {
      return -1;
    } else {
      double destLat = toRadians(other.getLatitude());
      double destLong = toRadians(other.getLongitude());
      double sourceLat = toRadians(this.getLatitude());
      double sourceLong = toRadians(this.getLongitude());
      double x = cos(destLat)* cos(destLong)- cos(sourceLat)* cos(sourceLong);//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
      double y = cos(destLat)* sin(destLong)- cos(sourceLat)* sin(sourceLong);//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
      double z = sin(destLat)- sin(sourceLat);//sin(Theta2)-sin(Theta1)
      double c = sqrt(pow(x,2)+ pow(y,2)+ pow(z,2));//sqrt(x^2+y^2+z^2)
      double rho = 2* asin(c/2);//2arcsin(C/2)
      double d = round(unit.getConversionFactor() * rho);//radius*central angle (in miles km would be 6371.0088)
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
          case "id": id = jsonReader.nextString(); break;
          case "name": name = jsonReader.nextString(); break;
          case "latitude": latitude = CoordinateParser.parse(jsonReader.nextString()); break;
          case "longitude": longitude = CoordinateParser.parse(jsonReader.nextString()); break;
        }
      }
      jsonReader.endObject();
      checkNull(id, "Id must be specified");
      checkNull(name, "Name must be specified");
      checkNull(latitude, "Latitude must be specified");
      checkNull(longitude, "Longitude must be specified");
      return new Place(id, name, latitude, longitude);
    }

    private static void checkNull(Object value, String message) {
      if (value == null) {
        throw new IllegalArgumentException(message);
      }
    }
  }
}
