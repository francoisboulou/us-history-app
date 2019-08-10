import controlExtend from "./../../../../Utils/controlExtend";
import L from "leaflet";

export default function MyLocation(mapRef) {
  const opts = {
    position: "bottomright"
  };

  const handlers = {
    onClick: () => {
      navigator.geolocation.getCurrentPosition(position => {
        mapRef.current.panTo([
          position.coords.latitude,
          position.coords.longitude
        ]);
      });
    }
  };

  L.control.myLoc = controlExtend(
    "button",
    "My Location",
    opts,
    mapRef,
    handlers
  ).addTo(mapRef.current);
}
