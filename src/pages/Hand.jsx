import HandImages from "../../assets/images/hand/HandImages";

import HandVoronoi from "../components/hand/HandVoronoi";

import { useState } from "react";
import Highlight from "../components/hand/Highlight";
import Active from "../components/hand/Active";
import Others from "../components/hand/Others";
import ButtonHand from "../components/hand/ButtonHand";

export default function Hand({
  clickedZone,
  setClickedZone,
  isOthers,
  setIsOthers,
  setHandSymtomp,
  handSymtomp,
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
          คุณปวดข้อนิ้วบริเวณไหนมากที่สุด?
        </h1>
        <div className="w-[25rem] h-[30rem] relative">
          <img
            src={HandImages.defaultFingers}
            className="absolute object-contain"
          />
          <Active
            zone={zone}
            mouseInBox={mouseInBox}
            clickedZone={clickedZone}
          />
          <Highlight clickedZone={clickedZone} />
          <HandVoronoi
            zone={zone}
            setZone={setZone}
            mouseInBox={mouseInBox}
            setMouseInBox={setMouseInBox}
            clickedZone={clickedZone}
            setClickedZone={setClickedZone}
            setIsOthers={setIsOthers}
            setHandSymtomp={setHandSymtomp}
            showVoronoiOverlay={showVoronoiOverlay}
          />
          <Others
            setClickedZone={setClickedZone}
            isOthers={isOthers}
            setIsOthers={setIsOthers}
            setHandSymtomp={setHandSymtomp}
          />
        </div>
      </div>
      <ButtonHand
        setShowVoronoiOverlay={setShowVoronoiOverlay}
        showVoronoiOverlay={showVoronoiOverlay}
      />
    </div>
  );
}
