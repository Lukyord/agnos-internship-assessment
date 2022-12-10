import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";
import voronoi_img from "../../../assets/voronoi/voronoi_svg_export.svg";
import voronoi from "../voronoi/voronoi";

import { useState, useEffect } from "react";

export default function useAbdomenVoronoi({
  zone,
  setZone,
  mouseInBox,
  setMouseInBox,
  clickedZone,
  setClickedZone,
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

    const handleMouseClick = () => {
      if (mouseInBox) {
        setClickedZone((prevState) =>
          prevState.map((item, idx) => (idx === zone - 1 ? !item : item))
        );
      }
    };
    //   if (mouseInBox) {
    //     setClickedZone(
    //       clickedZone.map((c) => {
    //         if (c.id === zone) {
    //           return { ...c, clicked: !c.clicked };
    //         } else {
    //           return c;
    //         }
    //       })
    //     );
    //     console.log(clickedZone);
    //   }
    // };
    //   const HanldeCheck = (index) => {
    //     setcheckBoxState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    // };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  });

  return (
    <div className="absolute border-2 w-[10rem] h-[11rem] left-[7rem] bottom-[9.25rem]">
      <img src={voronoi_img} />
      <b className="absolute z-10">
        ({mousePos.x}, {mousePos.y})
      </b>
      <b className="pl-[5rem]">{mouseInBox.toString()}</b>
      <p className="pl-[6rem] absolute">{zone}</p>
      <p className="pl-[15rem] absolute whitespace-nowrap">
        {clickedZone.map((c) => (
          <li>{c.toString()}</li>
        ))}
      </p>
    </div>
  );
}
