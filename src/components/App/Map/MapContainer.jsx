import React, { useEffect, useRef } from "react";
import L from "leaflet";
import controlExtend from "../../Utils/controlExtend";
// import Markers from "./Marker";

export default function MapContainer(props) {
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const layerID = "mapbox.streets";
  const mapRef = useRef(null);

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
    const opts = {
      position: "bottomright"
    };
    const handlers = {
      onClick: () => {
        navigator.geolocation.getCurrentPosition(position => {
          mapRef.current.panTo([
            position.coords.latitude,
            position.coords.longitude
          ]);
        });
      }
    };
    L.control.myLoc = controlExtend(
      "button",
      "My Location",
      opts,
      mapRef,
      handlers
    ).addTo(mapRef.current);
  });

  // const handleMoveend = () => {};

  return (
    <div
      // onMoveend={handleMoveend}
      style={{ height: "100vh", width: "100%" }}
      id="map"
    >
      {/* <Markers center={center} /> */}
    </div>
  );
}
