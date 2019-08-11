import React, { useEffect, useRef } from "react";
import L from "leaflet";
import resetMap from "./Controls/ResetMap/resetMap";
import createMarkers from "./Markers/createMarkers";

export default function MapContainer(props) {
  const center = [props.latitude, props.longitude];
  const layerID = "mapbox.streets";
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const zoom = 15.5;
  const mapRef = useRef(null);

  useEffect(
    () => {
      mapRef.current = L.map("map", {
        center: center,
        zoom: zoom,
        layers: [
          L.tileLayer(
            `https://api.tiles.mapbox.com/v4/${layerID}/{z}/{x}/{y}.png?access_token=${token}`,
            {
              attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            }
          )
        ]
      });
    },
    //eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      resetMap(mapRef, center, zoom);
    },
    //eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (props.events) {
      createMarkers(mapRef, props.events);
    }
  }, [props.events]);

  return <div style={{ height: "100vh", width: "100%" }} id="map" />;
}
