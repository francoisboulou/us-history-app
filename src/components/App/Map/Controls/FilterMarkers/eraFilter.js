import L from "leaflet";

export default function eraFilter() {
  const opts = {
    position: "topright"
  };

  L.Control.eraFilter = L.Control.extend({
    onAdd: map => {
      const ctrEl = L.DomUtil.create('div');
      ctrEl.style.backgroundColor = "white";
      ctrEl.innerHTML = '<input class="filterBox eraFilter" type="checkbox" id="era1" value="21st Century"><label for="era1">21st Century</label><input class="filterBox eraFilter" type="checkbox" id="era2" value="1900s"><label for="era2">1900s</label><input class="filterBox eraFilter" type="checkbox" id="era3" value="1800s"><label for="era3">1800s</label>'

      return ctrEl;
    }
});

const eraFilter = new L.Control.eraFilter(opts);

return eraFilter;
}