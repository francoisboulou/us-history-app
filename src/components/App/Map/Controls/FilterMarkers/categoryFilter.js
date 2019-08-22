import L from "leaflet";

export default function categoryFilter() {
  const opts = {
    position: "topright"
  };

  L.Control.categoryFilter = L.Control.extend({
    onAdd: map => {
      const ctrEl = L.DomUtil.create('div');
      ctrEl.style.backgroundColor = "white";
      ctrEl.innerHTML = '<input class="filterBox categoryFilter" type="checkbox" id="category1" value="science"><label for="category1">Science</label><input class="filterBox categoryFilter" type="checkbox" id="category2" value="military"><label for="category2">Military</label><input class="filterBox categoryFilter" type="checkbox" id="category3" value="culture"><label for="category3">Culture</label>'

      return ctrEl;
    }
});

const categoryFilter = new L.Control.categoryFilter(opts);

return categoryFilter
}