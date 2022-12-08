import AbdomenImages from "../../assets/images/abdomen/AbdomenImages";
import voronoi from "../../assets/voronoi/voronoi_svg_export.svg";

import { useState, useEffect } from "react";

export default function Abdomen() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="h-screen w-full bg-gray-400 flex flex-col justify-around items-center py-[2rem] 
    bg-gradient-to-r from-blue-900 to-blue-400 "
    >
      <b className="absolute z-10">
        ({mousePos.x}, {mousePos.y})
      </b>
      <div className="flex flex-col items-center w-[45rem] h-[37rem] bg-white rounded-2xl shadow-2xl">
        <h1 className="font-noto py-[2rem] text-4xl">
          คุณปวดท้องบริเวณไหนมากที่สุด?
        </h1>
        <div className="w-[25rem] h-[30rem] relative">
          <img
            src={AbdomenImages.defaultAbs}
            className="absolute object-contain"
          />
          <img
            src={AbdomenImages.epigastriumActive}
            className="absolute object-contain"
          />
          <div className="absolute border-2 w-[10rem] h-[11rem] left-[7rem] bottom-[9.25rem]">
            {/* (493, 300) (648, 473) */}
            <img src={voronoi} />
          </div>
        </div>
      </div>
      <button className="font-noto text-2xl w-[45rem] bg-white rounded-2xl shadow-2xl p-[0.5rem]">
        ต่อไป
      </button>
    </div>
  );
}
