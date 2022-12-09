function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

export default function voronoi(x, y) {
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

  console.log(index);
  return index;
}

// voronoi(867, 437);
// [493, 300],
// [648, 473],
