import getDistance from "./getDistance";

export default function voronoiAbdomen(x, y) {
  const distance = [];
  const nodes = [
    [790, 360],
    [823, 341],
    [852, 362],
    [820, 393],
    [791, 417],
    [820, 436],
    [859, 416],
  ];

  for (let i = 0; i < 7; i++) {
    let dis = getDistance(x, y, nodes[i][0], nodes[i][1]);
    distance.push(dis);
  }

  const index = distance.findIndex((d) => {
    return d === Math.min.apply(null, distance);
  });

  return index;
}

voronoiAbdomen(820, 207);
