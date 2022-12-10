import getDistance from "./getDistance";

export default function voronoiHand(x, y) {
  const distance = [];
  const nodes = [
    [723, 279],
    [771, 229],
    [817, 207],
    [865, 220],
    [740, 308],
    [779, 277],
    [822, 259],
    [865, 269],
    [945, 321],
    [768, 346],
    [843, 333],
    [916, 411],
  ];

  for (let i = 0; i < 12; i++) {
    let dis = getDistance(x, y, nodes[i][0], nodes[i][1]);
    distance.push(dis);
  }

  const minDistancEachZone = [
    Math.min.apply(Math, distance.slice(0, 4)),
    Math.min.apply(Math, distance.slice(4, 9)),
    Math.min.apply(Math, distance.slice(9, 12)),
  ];

  const index = minDistancEachZone.findIndex((d) => {
    return d === Math.min.apply(null, minDistancEachZone);
  });

  return index;
}

voronoiHand(820, 207);
