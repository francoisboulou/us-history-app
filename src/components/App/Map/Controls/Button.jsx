// import React, { Component } from "react";
import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class CenterMap extends MapControl {
  createLeafletElement(opts) {
    const CenterMap = L.Control.extend({
      onAdd: map => {
        this.ctrButton = L.DomUtil.create("button");
        this.ctrButton.innerHTML = "set location";
        return this.ctrButton;
      }
      // onRemove: function(map) {
      //   // Nothing to do here
      // }
    });
    return new CenterMap({ position: "bottomright" });
  }
  //
  //   L.control.centerBtn = function(opts) {
  //     return new L.Control.CenterBtn(opts);
  //   };
  //   L.control.centerBtn({ position: "bottomleft" }).addTo(map);
  // });
  // <MapView />
}

export default withLeaflet(CenterMap);
