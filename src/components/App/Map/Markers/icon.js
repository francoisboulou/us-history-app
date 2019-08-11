import L from 'leaflet';

const testIcon = new L.Icon({
    iconUrl: require('../../../../assets/images/App/Popups/test_event_photo.jpg'),
    iconRetinaUrl: require('../../../../assets/images/App/Popups/test_event_photo.jpg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(75, 75),
    className: 'leaflet-div-icon'
});

export { testIcon };