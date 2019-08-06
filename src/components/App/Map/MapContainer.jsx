import React, { useEffect, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
// import Button from "../../Utils/Button";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapContainer(props) {
  const zoom = 16;
  const attribution = `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`;
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const layerID = "mapbox.streets";
  const url = `https://api.tiles.mapbox.com/v4/${layerID}/{z}/{x}/{y}.png?access_token=${token}`;

  // L.Control.CenterBtn = L.Control.extend({
  //   onAdd: function(map) {
  //     var button = L.DomUtil.create("button");
  //     button.innerHTML = "set location";

  // return (
  // <Button
  //   content={"center on my location"}
  //   onClick={() => alert("thirstay")}
  // />
  //         button
  //       );
  //     },

  //     onRemove: function(map) {
  //       // Nothing to do here
  //     }
  //   });

  //   L.control.centerBtn = function(opts) {
  //     return new L.Control.CenterBtn(opts);
  //   };

  //   L.control.centerBtn({ position: "bottomleft" }).addTo(map);
  // });

  // <MapView />

  return (
    <Map
      style={{ height: "100vh", width: "100%" }}
      center={[props.latitude, props.longitude]}
      zoom={zoom}
    >
      <TileLayer attribution={attribution} url={url} />
    </Map>
  );
}
