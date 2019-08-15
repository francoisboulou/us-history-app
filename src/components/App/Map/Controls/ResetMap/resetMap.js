import controlExtend from "../../../../Utils/util_extendControl";
import L from "leaflet";

export default function resetMap(mapRef, center, zoom) {
  const opts = {
    position: "bottomright"
  };

  const handlers = {
    onClick: () => {
      mapRef.current.setView(center, zoom);
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
