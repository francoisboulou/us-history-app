import L from 'leaflet'

export default function setMarker(mapRef, position) {
    L.marker(position).addTo(mapRef.current);
}