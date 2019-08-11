import setMarker from "./setMarker";

export default function createMarkers(mapRef, events) {
  events.forEach(event => {
    setMarker(mapRef, event.location);
  });
}
