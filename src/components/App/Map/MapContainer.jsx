import React, { useEffect, useRef } from "react";
import L from "leaflet";
import myLocation from "./Controls/MyLocation/myLocation";
// import Markers from "./Marker";

export default function MapContainer(props) {
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const layerID = "mapbox.streets";
  const mapRef = useRef(null);
  const center = [props.latitude, props.longitude];

  useEffect(
    () => {
      mapRef.current = L.map("map", {
        center: [props.latitude, props.longitude],
        zoom: 16,
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

  useEffect(() => {
    myLocation(mapRef, center);
  });

  return (
    <div
      onMoveend={() => {
        alert("clicked");
      }}
      style={{ height: "100vh", width: "100%" }}
      id="map"
    >
      {/* <Markers center={center} /> */}
    </div>
  );
}
