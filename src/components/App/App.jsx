import React, { useState } from "react"; //useEffect
import "./App.css";
import Map from "./Map";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, []);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }
  // else {  /* geolocation IS NOT available */}
  if (latitude === null || longitude === null) {
    return <div>Loading</div>;
  }
  return <Map latitude={latitude} longitude={longitude} />;
}
