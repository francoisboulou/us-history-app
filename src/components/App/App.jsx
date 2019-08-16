import React, { useState, useEffect } from "react"; //useEffect
import "./App.css";
import Map from "./Map";
import apiResponse from "../Utils/util_apiResponse";
import coordArr from "../Utils/util_coordinateArray";

export default function App() {
  const [center, setCenter] = useState(null);
  const [geoResolved, setResolved] = useState(false);
  const [markersData, setMarkersData] = useState(null);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      setResolved(true);
    });
  }
  // else {  /* geolocation IS NOT available */}

  useEffect(
    () => {
      if (geoResolved) {
        const eventCoords = coordArr(center.lat, center.lng);
        apiResponse.forEach((response, index) => {
          response.location = eventCoords[index];
        });
        setMarkersData(apiResponse);
      }
    },
    // eslint-disable-next-line
    [geoResolved]
  );

  if (center === null || markersData === null) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Map markersData={markersData} center={center} />;
      <div
        style={{
          height: "300px",
          width: "300px",
          border: "2px solid red",
          zIndex: "400",
          position: "absolute",
          top: "0",
          left: "0"
        }}
      />
    </div>
  );
}
