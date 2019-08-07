import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { testIcon } from "./Marker/Icon";

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
      <Marker position={center} icon={testIcon}>
        {/* <Popup>
          <img src={testImg} style={{ width: "100%" }} alt="" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Popup> */}
      </Marker>
      <TileLayer attribution={attribution} url={url} />
      <CenterMap />
    </Map>
  );
}
