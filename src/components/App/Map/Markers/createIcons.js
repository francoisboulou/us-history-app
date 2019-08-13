import L from "leaflet";

export default function createIcons(events) {
  return events.map(event =>
    L.icon({
      iconUrl: event.image,
      //  iconSize: new L.Point(45, 45),
      opacity: 0.5,
      iconAnchor: new L.Point(16, 16),
      popupAnchor: new L.Point(0, -18),
      className: "leaflet-div-icon"
    })
  );
}
