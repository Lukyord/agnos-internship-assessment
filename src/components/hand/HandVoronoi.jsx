import voronoi_img_hand from "../../../assets/voronoi/voronoi_svg_export_hand.svg";

import voronoiHand from "../voronoi/voronoiHand";

import { useState, useEffect } from "react";

export default function HandVoronoi({
  zone,
  setZone,
  mouseInBox,
  setMouseInBox,
  clickedZone,
  setClickedZone,
  setIsOthers,
}) {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      if (
        mousePos.x > 715 &&
        mousePos.x < 965 &&
        mousePos.y > 176 &&
        mousePos.y < 443
      ) {
        setMouseInBox(true);
        setZone(voronoiHand(mousePos.x, mousePos.y) + 1);
      } else {
        setMouseInBox(false);
      }
    };

    const handleMouseClick = () => {
      if (mouseInBox) {
        setClickedZone((prevState) =>
          prevState.map((item, idx) => (idx === zone - 1 ? !item : false))
        );
        setIsOthers(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  });

  return (
    <div className="absolute border-2 w-[16rem] h-[17rem] left-[5rem] bottom-[11rem]">
      <img src={voronoi_img_hand} />
      <b className="absolute z-10">
        ({mousePos.x}, {mousePos.y})
      </b>
      <b className="pl-[5rem]">{mouseInBox.toString()}</b>
      <p className="pl-[6rem] absolute">{zone}</p>
      <p className="pl-[20rem] absolute whitespace-nowrap">
        {clickedZone.map((c) => (
          <li>{c.toString()}</li>
        ))}
      </p>
    </div>
  );
}
