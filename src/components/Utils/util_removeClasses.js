export default function removeClasses(elArr1, elArr2) {
    if (elArr1.length) {
      elArr1.forEach(el => {
        el.classList.remove("icon-z-index");
      });
    }
    if (elArr2.length) {
      elArr2.forEach(el => {
        el.classList.remove("leaflet-div-icon-hover");
      });
    }
  }