import AbdomenImages from "../../assets/images/abdomen/AbdomenImages";

import AbdomenVoronoi from "../components/abdomen/AbdomenVoronoi";

import { useState } from "react";
import Active from "../components/abdomen/Active";
import Highlight from "../components/abdomen/Highlight";
import AllActiveButton from "../components/abdomen/AllActiveButton";

export default function Abdomen() {
  const [zone, setZone] = useState(-1);
  const [mouseInBox, setMouseInBox] = useState(false);
  const [clickedZone, setClickedZone] = useState(Array(7).fill(false));
  const [isAllActive, setIsAllActive] = useState(false);

  return (
    <div
      className="h-screen w-full bg-gray-400 flex flex-col justify-around items-center py-[2rem] 
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
          <Highlight
            zone={zone}
            mouseInBox={mouseInBox}
            clickedZone={clickedZone}
          />
          <AbdomenVoronoi
            zone={zone}
            setZone={setZone}
            mouseInBox={mouseInBox}
            setMouseInBox={setMouseInBox}
            clickedZone={clickedZone}
            setClickedZone={setClickedZone}
          />
          <AllActiveButton
            setClickedZone={setClickedZone}
            isAllActive={isAllActive}
            setIsAllActive={setIsAllActive}
          />
        </div>
      </div>
      <div className="flex justify-between w-[45rem]">
        <div className="w-2/3 flex justify-between">
          <button className="font-noto text-2xl bg-white rounded-2xl shadow-2xl p-[0.5rem] grow mr-[2rem]">
            ตรวจมือ
          </button>
          <button className="font-noto text-2xl bg-white rounded-2xl shadow-2xl p-[0.5rem] grow mr-[2rem]">
            ดูผลตรวจ
          </button>
        </div>
        {/* <button className="font-noto text-sm bg-white rounded-2xl shadow-2xl p-[0.5rem] w-[10rem] h-[2rem]">
          เปิด Voronoi Overlay
        </button> */}
      </div>
    </div>
  );
}

{
  /* <Voronoi
        extent={[
          [493, 300],
          [648, 473],
        ]}
        nodes={[
          { x: 790, y: 360, style: { stroke: "blue" } },
          { x: 823, y: 341 },
          { x: 852, y: 362 },
          { x: 820, y: 393 },
          { x: 791, y: 417 },
          { x: 820, y: 436 },
          { x: 859, y: 416 },
        ]}
      /> */
}
