import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import resetMap from "./Controls/ResetMap/resetMap";
import removeClasses from "../../Utils/util_removeClasses";

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

  const scienceLayerRef = useRef(null);
  const cultureLayerRef = useRef(null);
  const militaryLayerRef = useRef(null);
  const cent21LayerRef = useRef(null);
  const [layerObj, setLayerObj] = useState(null);
  useEffect(() => {
    scienceLayerRef.current = L.layerGroup().addTo(mapRef.current);
    cultureLayerRef.current = L.layerGroup().addTo(mapRef.current);
    militaryLayerRef.current = L.layerGroup().addTo(mapRef.current);
    cent21LayerRef.current = L.layerGroup().addTo(mapRef.current);
    setLayerObj({
      science: scienceLayerRef.current,
      culture: cultureLayerRef.current,
      military: militaryLayerRef.current
    });
  }, []);

  // update markers
  //someMarker.addTo(someLayerGroup);

  useEffect(
    () => {
      // scienceLayerRef.current.clearLayers();
      if (layerObj) {
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
            .addTo(layerObj[marker.category], cent21LayerRef.current);
        });
      }
    },
    // eslint-disable-next-line
    [layerObj]
  );

  useEffect(() => {
    if (layerObj) {
      Object.values(layerObj).forEach(layerGrp => {
        layerGrp.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            layer.on("popupclose", e => {
              console.log(e);
              removeClasses(
                Array.from(document.getElementsByClassName("icon-z-index")),
                Array.from(
                  document.getElementsByClassName("leaflet-div-icon-hover")
                )
              );
            });

            layer.on("click", e => {
              removeClasses(
                Array.from(document.getElementsByClassName("icon-z-index")),
                Array.from(
                  document.getElementsByClassName("leaflet-div-icon-hover")
                )
              );
              const rect = e.target._icon.getBoundingClientRect();
              const pX = rect.x + 100;
              const pY = rect.y + 190;
              const point = mapRef.current.containerPointToLatLng(
                L.point(pX, pY)
              );

              mapRef.current.setView(point);

              e.target._icon.classList.add(
                "icon-z-index",
                "leaflet-div-icon-hover"
              );
            });
          }
        });
      });
    }
    //eslint-disable-next-line
  }, [layerObj]);

  useEffect(
    () => {
      mapRef.current.on("click", () => {
        removeClasses(
          Array.from(document.getElementsByClassName("icon-z-index")),
          Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
        );
      });

      mapRef.current.on("zoomend", () => {
        removeClasses(
          Array.from(document.getElementsByClassName("icon-z-index")),
          Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
        );
        mapRef.current.closePopup();
        if (mapRef.current._zoom === 16) {
          Array.from(
            document.getElementsByClassName("leaflet-div-icon")
          ).forEach(el => {
            el.classList.add("zoomed");
          });
        } else {
          if (Array.from(document.getElementsByClassName("zoomed")).length) {
            Array.from(
              document.getElementsByClassName("leaflet-div-icon")
            ).forEach(el => {
              el.classList.remove("zoomed");
            });
          }
        }
      });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const cent = {
        "21st Century": cent21LayerRef.current
      };
      if (layerObj) {
        resetMap(mapRef, center, zoom);
        L.control
          .layers(null, layerObj, { collapsed: false })
          .addTo(mapRef.current);
        L.control
          .layers(null, cent, { collapsed: false })
          .addTo(mapRef.current);
      }
    },
    //eslint-disable-next-line
    [layerObj]
  );

  return <div style={{ height: "100vh", width: "100%" }} id="map" />;
}
