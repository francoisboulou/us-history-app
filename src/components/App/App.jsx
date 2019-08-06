import React from "react";
import "./App.css";
import MapView from "./Map";

function App() {
  return <MapView />;
}

/* <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
      integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
      crossorigin=""
    ></script>
    <!-- <script src="leafletTest.js"></script> -->
  </head>
  <body>
    <div style="height: 500px" id="mapid"></div>
    <script src="leafletTest.js"></script>
  </body> */

//   let mymap = L.map("mapid").setView([51.505, -0.09], 13);

// L.tileLayer(
//   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken:
//       "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g"
//   }
// ).addTo(mymap);

// var marker = L.marker([51.5, -0.09]).addTo(mymap);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

export default App;
