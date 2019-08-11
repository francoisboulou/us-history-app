import React, { useState, useEffect } from "react"; //useEffect
import "./App.css";
import Map from "./Map";
import historyAPI from "../../assets/historyAPI";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [events, setEvents] = useState(null);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }
  // else {  /* geolocation IS NOT available */}

  useEffect(
    () => {
      if (latitude && longitude) {
        setEvents(historyAPI(latitude, longitude));
      }
    },
    // esling-disable-next-line
    [latitude, longitude]
  );

  if (latitude === null || longitude === null || events === null) {
    return <div>Loading</div>;
  }
  return <Map events={events} latitude={latitude} longitude={longitude} />;
}
