import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import resetMap from "./Controls/ResetMap/resetMap";
import categoryFilter from "./Controls/FilterMarkers/categoryFilter";
import eraFilter from "./Controls/FilterMarkers/eraFilter";
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

  const visibleMarkersRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    visibleMarkersRef.current = L.layerGroup();
  }, []);

  useEffect(
    () => {
      markersData.forEach(marker => {
        setMarkers(markers => [
          ...markers,
          L.marker(marker.location, {
            icon: L.icon({
              iconUrl: marker.image,
              className: "leaflet-div-icon"
            }),
            category: marker.category,
            era: marker.era,
            year: marker.year
          }).bindPopup(
            `<h1>${marker.title}</h1><p>${
              marker.description
            }</p><a>Learn More</a>`
          )
        ]);
      });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    markers.forEach(marker => {
      marker.on("popupclose", e => {
        console.log(e);
        removeClasses(
          Array.from(document.getElementsByClassName("icon-z-index")),
          Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
        );
      });

      marker.on("click", e => {
        removeClasses(
          Array.from(document.getElementsByClassName("icon-z-index")),
          Array.from(document.getElementsByClassName("leaflet-div-icon-hover"))
        );

        const rect = e.target._icon.getBoundingClientRect();
        const pX = rect.x + 100;
        const pY = rect.y + 190;
        const point = mapRef.current.containerPointToLatLng(L.point(pX, pY));

        mapRef.current.setView(point);

        e.target._icon.classList.add("icon-z-index", "leaflet-div-icon-hover");
      });
    });
    //eslint-disable-next-line
  }, [markers]);

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
      resetMap(mapRef, center, zoom);
    },
    //eslint-disable-next-line
    []
  );

  const eraFilterRef = useRef(null);
  const categoryFilterRef = useRef(null);
  useEffect(
    () => {
      categoryFilterRef.current = categoryFilter().addTo(mapRef.current);
      eraFilterRef.current = eraFilter().addTo(mapRef.current);
    },
    //eslint-disable-next-line
    []
  );

  const [eraFilterArr, setEraFilter] = useState([]);
  const [categoryFilterArr, setcategoryFilter] = useState([]);
  useEffect(() => {
    const filterBoxes = document.getElementsByClassName("filterBox");
    for (let box of filterBoxes) {
      box.onclick = () => {
        if (box.checked) {
          if (box.classList.contains("eraFilter")) {
            setEraFilter(eraFilterArr => [...eraFilterArr, box.value]);
          } else if (box.classList.contains("categoryFilter")) {
            setcategoryFilter(categoryFilterArr => [
              ...categoryFilterArr,
              box.value
            ]);
          }
        } else {
          if (box.classList.contains("eraFilter")) {
            setEraFilter(eraFilterArr =>
              eraFilterArr.filter(item => item !== box.value)
            );
          } else if (box.classList.contains("categoryFilter")) {
            setcategoryFilter(categoryFilterArr =>
              categoryFilterArr.filter(item => item !== box.value)
            );
          }
        }
      };
    }
    console.log("category: ", categoryFilterArr, "eras: ", eraFilterArr);
  }, [eraFilterArr, categoryFilterArr]);

  useEffect(() => {
    if (!eraFilterArr.length && !categoryFilterArr.length) {
      markers.forEach(marker => {
        marker.addTo(visibleMarkersRef.current);
      });
      visibleMarkersRef.current.addTo(mapRef.current);
    } else {
      visibleMarkersRef.current.clearLayers();
      if (!eraFilterArr.length) {
        markers.forEach(marker => {
          if (categoryFilterArr.includes(marker.options.category)) {
            marker.addTo(visibleMarkersRef.current);
          }
        });
      }
      if (!categoryFilterArr.length) {
        markers.forEach(marker => {
          if (eraFilterArr.includes(marker.options.era)) {
            marker.addTo(visibleMarkersRef.current);
          }
        });
      }
      markers.forEach(marker => {
        if (
          eraFilterArr.includes(marker.options.era) &&
          categoryFilterArr.includes(marker.options.category)
        ) {
          marker.addTo(visibleMarkersRef.current);
        }
      });
    }
  }, [markers, visibleMarkersRef, categoryFilterArr, eraFilterArr]);

  return <div style={{ height: "100vh", width: "100%" }} id="map" />;
}
