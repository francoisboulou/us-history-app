// This function creates latlng pairs within bounds defined, for setting dummy markers

export default function coordArray(lat,lng) {
  const boundsMod = .025
  const markerAmnt = 25
  
  const topLat = lat + boundsMod;
  const botLat = lat - boundsMod;
  const rightLng = lng + boundsMod;
  const leftLng = lng - boundsMod;

  function getRandomCoords(leftLng, rightLng, topLat, botLat) {
    return [
      Math.random() * (topLat - botLat) + botLat,
      Math.random() * (rightLng - leftLng) + leftLng
    ];
  }

  let arr = [];

  for (let i = 0; i < markerAmnt; i++) {
    arr.push(getRandomCoords(leftLng, rightLng, topLat, botLat));
  }

  return arr;
}
