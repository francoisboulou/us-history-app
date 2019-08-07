import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import CenterMap from "./Controls/CenterMap";

export default function MapContainer(props) {
  const zoom = 16;
  const attribution = `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`;
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const layerID = "mapbox.streets";
  const url = `https://api.tiles.mapbox.com/v4/${layerID}/{z}/{x}/{y}.png?access_token=${token}`;
  const center = [props.latitude, props.longitude];
  // const location = ;
  return (
    <Map style={{ height: "100vh", width: "100%" }} center={center} zoom={zoom}>
      <Marker position={center}>
        <Popup>Some shit went down hurrr.</Popup>
      </Marker>
      <TileLayer attribution={attribution} url={url} />
      <CenterMap />
    </Map>
  );
}
