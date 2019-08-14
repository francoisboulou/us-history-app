import React, { useEffect, useRef } from "react";
import L from "leaflet";
import resetMap from "./Controls/ResetMap/resetMap";
import "leaflet";

export default function MapContainer(props) {
  const center = [props.latitude, props.longitude];
  const layerID = "mapbox.streets";
  const token =
    "pk.eyJ1IjoiZnJhbmNvaXNib3Vsb3UiLCJhIjoiY2p5bmExeDlsMHJ2ZDNqbzlnaTczb3A0aSJ9.CuRKIcFYSVEtYf1UHYGs_g";
  const zoom = 14.5;
  const mapRef = useRef(null);

  // Map created
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

  // Function extends Leaflet Control class to create a custom button
  useEffect(
    () => {
      resetMap(mapRef, center, zoom);
    },
    //eslint-disable-next-line
    []
  );

  // Setting markers based on information passed to comp from historyAPI()
  useEffect(() => {
    function removeClasses(elArr1, elArr2) {
      if (elArr1.length) {
        elArr1.forEach(el => {
          el.classList.remove("icon-z-index");
        });
      }
      if (elArr2.length) {
        elArr2.forEach(el => {
          el.classList.remove("leaflet-div-icon-hover");
        });
      }
    }

    if (props.events) {
      props.events.forEach(event => {
        const marker = L.marker(event.location, {
          icon: L.icon({
            iconSize: new L.Point(45, 45),
            iconUrl: event.image,
            opacity: 0.5,
            iconAnchor: new L.Point(16, 16),
            popupAnchor: new L.Point(0, -18),
            className: "leaflet-div-icon"
          })
        }).addTo(mapRef.current);

        marker.bindPopup(
          `<h1>${event.title}</h1><p>${event.description}</p><a>Learn More</a>`,
          { autoPan: true }
        );

        marker.on("click", e => {
          console.log(e.target);
          removeClasses(
            Array.from(document.getElementsByClassName("icon-z-index")),
            Array.from(
              document.getElementsByClassName("leaflet-div-icon-hover")
            )
          );

          // marker.on("popupclose", e => {
          //   console.log(e);
          //   removeClasses(
          //     Array.from(document.getElementsByClassName("icon-z-index")),
          //     Array.from(
          //       document.getElementsByClassName("leaflet-div-icon-hover")
          //     )
          //   );
          // });

          let pointX = marker._icon.getBoundingClientRect().x + 100;
          let pointY = marker._icon.getBoundingClientRect().y + 165;
          let point = mapRef.current.containerPointToLatLng(
            L.point(pointX, pointY)
          );

          // console.log("map", mapRef.current);

          // let point = L.point;

          mapRef.current.setView(point);

          e.target._icon.classList.add(
            "icon-z-index",
            "leaflet-div-icon-hover"
          );
        });

        marker.on("popupclose", e => {
          console.log(e);
          removeClasses(
            Array.from(document.getElementsByClassName("icon-z-index")),
            Array.from(
              document.getElementsByClassName("leaflet-div-icon-hover")
            )
          );
        });
      });
    }

    // Array.from(
    //   document.getElementsByClassName("leaflet-popup-close-button")
    // ).forEach(el => {
    //   el.addEventListener(
    //     "click",
    //     removeClasses(
    //       Array.from(document.getElementsByClassName("icon-z-index")),
    //       Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
    //     )
    //   );
    // });

    mapRef.current.on("click", () => {
      removeClasses(
        Array.from(document.getElementsByClassName("icon-z-index")),
        Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
      );
    });
    //eslint-disable-next-line
    [];
  });

  return <div style={{ height: "100vh", width: "100%" }} id="map" />;
}
