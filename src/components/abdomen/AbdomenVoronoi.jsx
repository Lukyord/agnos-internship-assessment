import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";
import voronoi_img from "../../../assets/voronoi/voronoi_svg_export.svg";
import voronoi from "../voronoi/voronoi";

import { useState, useEffect } from "react";

export default function useAbdomenVoronoi({
  zone,
  setZone,
  mouseInBox,
  setMouseInBox,
}) {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      if (
        mousePos.x > 747 &&
        mousePos.x < 901 &&
        mousePos.y > 302 &&
        mousePos.y < 473
      ) {
        setMouseInBox(true);
        setZone(voronoi(mousePos.x, mousePos.y) + 1);
      } else {
        setMouseInBox(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <div className="absolute border-2 w-[10rem] h-[11rem] left-[7rem] bottom-[9.25rem]">
      <img src={voronoi_img} />
      <b className="absolute z-10">
        ({mousePos.x}, {mousePos.y})
      </b>
      <b className="pl-[5rem]">{mouseInBox.toString()}</b>
      <p className="pl-[6rem] absolute">{zone}</p>
    </div>
  );
}
