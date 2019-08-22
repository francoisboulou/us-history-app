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

  

  L.Control.resetMap = L.Control.extend({
    onAdd: map => {
      const ctrEl = L.DomUtil.create("button");
      ctrEl.innerHTML = "My Location";
      ctrEl.onclick = handlers.onClick
      return ctrEl;
    }
    // onRemove: function(map) {
    // Nothing to do here
    //   }
});

const resetMap = new L.Control.resetMap(opts);

resetMap.addTo(mapRef.current);
}
