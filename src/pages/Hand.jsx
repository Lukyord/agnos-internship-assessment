import HandImages from "../../assets/images/hand/HandImages";

import HandVoronoi from "../components/hand/HandVoronoi";

import { useState } from "react";
import Highlight from "../components/hand/Highlight";

export default function Hand() {
  const [zone, setZone] = useState(-1);
  const [mouseInBox, setMouseInBox] = useState(false);
  const [clickedZone, setClickedZone] = useState(Array(3).fill(false));

  return (
    <div
      className="h-screen w-full bg-gray-400 flex flex-col justify-around items-center py-[2rem] 
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
          <Highlight clickedZone={clickedZone} />
          <HandVoronoi
            zone={zone}
            setZone={setZone}
            mouseInBox={mouseInBox}
            setMouseInBox={setMouseInBox}
            clickedZone={clickedZone}
            setClickedZone={setClickedZone}
          />
        </div>
      </div>
      <div className="flex justify-between w-[45rem]">
        <div className="w-2/3 flex justify-between">
          <button className="font-noto text-2xl bg-white rounded-2xl shadow-2xl p-[0.5rem] grow mr-[2rem]">
            ตรวจท้อง
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
