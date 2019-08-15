import L from 'leaflet'

export default function controlExtend(elStr, elInner, opts, mapRef, handlers) {
   
    L.Control.ctrlExt = L.Control.extend({
        onAdd: map => {
          const ctrEl = L.DomUtil.create(elStr);
          ctrEl.innerHTML = elInner;
          ctrEl.onclick = handlers.onClick
          return ctrEl;
        }
        // onRemove: function(map) {
        // Nothing to do here
        //   }
    });

    return new L.Control.ctrlExt(opts);
}