import React, { useEffect, useRef } from "react";
import L from "leaflet";
import resetMap from "./Controls/ResetMap/resetMap";
import removeClasses from "../../Utils/util_removeClasses";
import "leaflet";

export default function MapContainer({ center, markersData }) {
  const layerID = "mapbox.streets";
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const minZoom = 13;
  const zoom = 14.5;
  const maxZoom = 16;

  // Map created
  const mapRef = useRef(null);
  useEffect(
    () => {
      mapRef.current = L.map("map", {
        center: center,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
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

  // Function extends Leaflet Control class to create a custom button
  useEffect(
    () => {
      resetMap(mapRef, center, zoom);
    },
    //eslint-disable-next-line
    []
  );

  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(
    () => {
      layerRef.current.clearLayers();
      markersData.forEach(marker => {
        L.marker(marker.location, {
          icon: L.icon({
            iconUrl: marker.image,
            className: "leaflet-div-icon"
          })
        })
          .bindPopup(
            `<h1>${marker.title}</h1><p>${
              marker.description
            }</p><a>Learn More</a>`
          )
          .addTo(layerRef.current);
      });
    },
    // eslint-disable-next-line
    []
  );

  // useEffect(() => {
  //   markersData.forEach(marker => {
  //     marker.on("click", e => {
  //       removeClasses(
  //         Array.from(document.getElementsByClassName("icon-z-index")),
  //         Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
  //       );
  //       let pointX = marker._icon.getBoundingClientRect().x + 100;
  //       let pointY = marker._icon.getBoundingClientRect().y + 190;
  //       let point = mapRef.current.containerPointToLatLng(
  //         L.point(pointX, pointY)
  //       );

  //       mapRef.current.setView(point);

  //       e.target._icon.classList.add("icon-z-index", "leaflet-div-icon-hover");
  //     });

  //     marker.on("popupclose", e => {
  //       console.log(e);
  //       removeClasses(
  //         Array.from(document.getElementsByClassName("icon-z-index")),
  //         Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
  //       );
  //     });
  //   });

  //   mapRef.current.on("click", () => {
  //     removeClasses(
  //       Array.from(document.getElementsByClassName("icon-z-index")),
  //       Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
  //     );
  //   });
  //   //eslint-disable-next-line
  // }, []);

  // useEffect(
  //   () => {
  //     mapRef.current.on("zoomend", () => {
  //       removeClasses(
  //         Array.from(document.getElementsByClassName("icon-z-index")),
  //         Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
  //       );
  //       mapRef.current.closePopup();
  //       if (mapRef.current._zoom === 16) {
  //         Array.from(
  //           document.getElementsByClassName("leaflet-div-icon")
  //         ).forEach(el => {
  //           el.classList.add("zoomed");
  //         });
  //       } else {
  //         if (Array.from(document.getElementsByClassName("zoomed")).length) {
  //           Array.from(
  //             document.getElementsByClassName("leaflet-div-icon")
  //           ).forEach(el => {
  //             el.classList.remove("zoomed");
  //           });
  //         }
  //       }
  //     });
  //   },
  //   // eslint-disable-next-line
  //   []
  // );

  return <div style={{ height: "100vh", width: "100%" }} id="map" />;
}
