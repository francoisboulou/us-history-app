import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapContainer() {
  useEffect(() => {
    L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer(
          "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox.streets",
            accessToken:
              "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g"
          }
        )
      ]
    });
  });

  return <div style={{ height: "100vh", width: "100vw" }} id="map" />;
}
