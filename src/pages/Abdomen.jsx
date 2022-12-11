import AbdomenImages from "../../assets/images/abdomen/AbdomenImages";

import AbdomenVoronoi from "../components/abdomen/AbdomenVoronoi";

import { useState } from "react";
import Active from "../components/abdomen/Active";
import Highlight from "../components/abdomen/Highlight";
import AllActiveButton from "../components/abdomen/AllActiveButton";
import ButtonAbdomen from "../components/abdomen/ButtonAbdomen";

export default function Abdomen({
  setAbdomenSymtomp,
  clickedZone,
  setClickedZone,
  isAllActive,
  setIsAllActive,
}) {
  const [zone, setZone] = useState(-1);
  const [mouseInBox, setMouseInBox] = useState(false);
  const [showVoronoiOverlay, setShowVoronoiOverlay] = useState(false);

  return (
    <div
      className="h-screen w-full flex flex-col justify-around items-center py-[2rem] 
    bg-gradient-to-r from-blue-900 to-blue-400 "
    >
      <div className="flex flex-col items-center w-[45rem] h-[37rem] bg-white rounded-2xl shadow-2xl">
        <h1 className="font-noto py-[2rem] text-4xl">
          คุณปวดท้องบริเวณไหนมากที่สุด?
        </h1>
        <div className="w-[25rem] h-[30rem] relative">
          <img
            src={AbdomenImages.defaultAbs}
            className="absolute object-contain"
          />
          <Active
            zone={zone}
            mouseInBox={mouseInBox}
            clickedZone={clickedZone}
            isAllActive={isAllActive}
          />
          <Highlight clickedZone={clickedZone} />
          <AbdomenVoronoi
            zone={zone}
            setZone={setZone}
            mouseInBox={mouseInBox}
            setMouseInBox={setMouseInBox}
            clickedZone={clickedZone}
            setClickedZone={setClickedZone}
            isAllActive={isAllActive}
            setIsAllActive={setIsAllActive}
            setAbdomenSymtomp={setAbdomenSymtomp}
            showVoronoiOverlay={showVoronoiOverlay}
          />
          <AllActiveButton
            setClickedZone={setClickedZone}
            isAllActive={isAllActive}
            setIsAllActive={setIsAllActive}
            setAbdomenSymtomp={setAbdomenSymtomp}
          />
        </div>
      </div>
      <ButtonAbdomen
        setShowVoronoiOverlay={setShowVoronoiOverlay}
        showVoronoiOverlay={showVoronoiOverlay}
      />
    </div>
  );
}
