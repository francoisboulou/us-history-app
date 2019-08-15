import React, { useState, useEffect } from "react"; //useEffect
import "./App.css";
import Map from "./Map";
import APIResponse from "../Utils/APIResponse";
import coordArray from "../Utils/coordArray";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [events, setEvents] = useState(null);
  const [latLngRes, setRes] = useState(false);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setRes(true);
    });
  }
  // else {  /* geolocation IS NOT available */}

  useEffect(() => {
    if (latLngRes) {
      const eventCoords = coordArray(latitude, longitude);
      APIResponse.forEach((response, index) => {
        response.location = eventCoords[index];
      });
      setEvents(APIResponse);
    }
  }, [latLngRes]);

  if (latitude === null || longitude === null || events === null) {
    return <div>Loading</div>;
  }
  return <Map events={events} latitude={latitude} longitude={longitude} />;
}
