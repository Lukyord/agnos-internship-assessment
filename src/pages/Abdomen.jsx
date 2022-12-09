import AbdomenImages from "../../assets/images/abdomen/AbdomenImages";

import AbdomenVoronoi from "../components/abdomen/AbdomenVoronoi";

export default function Abdomen() {
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
          <img
            src={AbdomenImages.epigastriumActive}
            className="absolute object-contain"
          />
          <img
            src={AbdomenImages.llqActive}
            className="absolute z-10 object-contain"
          />
          <AbdomenVoronoi />
        </div>
      </div>
      <button className="font-noto text-2xl w-[45rem] bg-white rounded-2xl shadow-2xl p-[0.5rem]">
        ต่อไป
      </button>
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
