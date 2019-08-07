import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class CenterMap extends MapControl {
  createLeafletElement(opts) {
    const CenterMap = L.Control.extend({
      onAdd: map => {
        this.ctrButton = L.DomUtil.create("button");
        this.ctrButton.innerHTML = "set location";
        this.ctrButton.onclick = () => {
          navigator.geolocation.getCurrentPosition(position => {
            map.panTo(
              new L.LatLng(position.coords.latitude, position.coords.longitude)
            );
          });
        };
        return this.ctrButton;
      }
      // onRemove: function(map) {
      //   // Nothing to do here
      // }
    });
    return new CenterMap({ position: "bottomright" });
  }
}

export default withLeaflet(CenterMap);
