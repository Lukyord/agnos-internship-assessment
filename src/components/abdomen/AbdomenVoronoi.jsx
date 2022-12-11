import voronoi_img_abdomen from "../../../assets/voronoi/voronoi_svg_export_abdomen.svg";
import voronoiAbdomen from "../voronoi/voronoiAbdomen";
import resultSymtomp from "./resultSymtomp";

import { useState, useEffect } from "react";

export default function useAbdomenVoronoi({
  zone,
  setZone,
  mouseInBox,
  setMouseInBox,
  clickedZone,
  setClickedZone,
  isAllActive,
  setIsAllActive,
  setAbdomenSymtomp,
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
        setZone(voronoiAbdomen(mousePos.x, mousePos.y) + 1);
      } else {
        setMouseInBox(false);
      }
    };

    const handleMouseClick = () => {
      if (mouseInBox) {
        if (isAllActive) {
          setIsAllActive(false);
          setClickedZone((prevState) =>
            prevState.map((idx) => (idx === zone - 1 ? true : false))
          );
          setAbdomenSymtomp(resultSymtomp(zone));
          console.log(resultSymtomp(zone));
        } else {
          setClickedZone((prevState) =>
            prevState.map((item, idx) => (idx === zone - 1 ? !item : false))
          );
          setAbdomenSymtomp(resultSymtomp(zone));
          console.log(resultSymtomp(zone));
        }
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
    <div className="absolute border-2 w-[10rem] h-[11rem] left-[7rem] bottom-[9.25rem]">
      <img src={voronoi_img_abdomen} />
      <b className="absolute z-10">
        ({mousePos.x}, {mousePos.y})
      </b>
      <b className="pl-[5rem]">{mouseInBox.toString()}</b>
      <p className="pl-[6rem] absolute">{zone}</p>
      <p className="pl-[20rem] absolute whitespace-nowrap">
        {clickedZone.map((c, idx) => (
          <li key={"ab_admin" + idx}>{c.toString()}</li>
        ))}
      </p>
    </div>
  );
}
