//creates 10 latlng pairs in the direct area of a given latlng pair
import L from 'leaflet'

// export default function simAPI(latLng) {;

  // console.log(latLng);
  
  // let a = Number('.'+(String(latLng.lat).split('.'))[1].slice(0,2))
  // let b = Number('.'+(String(latLng.lng).split('.'))[1].slice(0,2))

  // console.log(a, b);
  
  // //you need to account for negative coords dummy!

  // function getRandomRanged(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  // const latPos = latLng.lat > 0
  // const lngPos = latLng.lng > 0
  // const latRound = latPos ? Math.floor(latLng.lat) : Math.ceil(latLng.lat) 
  // const lngRound = lngPos ? Math.floor(latLng.lng) : Math.ceil(latLng.lng)

  // // console.log(latFloor, lngFloor);
  
  // let coordsArr = [];

  // for (let i = 0; i < 10; i++) {
  //   let c = null
  //   let d = null

  //   if (latPos) {
  //     c = getRandomRanged(a, a +.01) + latRound
  //   } else {
  //     c = getRandomRanged(-(a), -(a +.01)) - latRound
  //   }

  //   if (lngPos) {
  //     d = getRandomRanged(b, b +.01) + lngRound
  //   } else {
  //     d = getRandomRanged(b*-1, (b +.01)*-1) + lngRound
  //   }

  //   coordsArr.push([c,d]);
  // }

//   return coordsArr;
// }
