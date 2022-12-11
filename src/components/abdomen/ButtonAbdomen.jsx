import { Link } from "react-router-dom";

export default function ButtonAbdomen({
  showVoronoiOverlay,
  setShowVoronoiOverlay,
}) {
  function handleClick() {
    setShowVoronoiOverlay(!showVoronoiOverlay);
  }

  return (
    <div className="flex justify-between w-[45rem]">
      <div className="w-2/3 flex justify-between">
        <Link
          to="/hand"
          className="font-noto text-2xl bg-white rounded-2xl shadow-2xl p-[0.5rem] grow mr-[2rem] text-center
          hover:bg-blue-400 hover:text-white"
        >
          <button>ตรวจมือ</button>
        </Link>
        <Link
          to="/result"
          className="font-noto text-2xl bg-white rounded-2xl shadow-2xl p-[0.5rem] grow mr-[2rem] text-center
          hover:bg-blue-400 hover:text-white"
        >
          <button>ดูผลตรวจ</button>
        </Link>
      </div>
      <button
        className={`font-noto text-sm bg-white rounded-2xl shadow-2xl p-[0.5rem] w-[12rem] h-[2rem] mt-[0.5rem]
        whitespace-nowrap ${
          showVoronoiOverlay && "bg-blue-400 text-white"
        } hover:bg-blue-400 hover:text-white`}
        onClick={handleClick}
      >
        {showVoronoiOverlay ? "ปิด" : "เปิด"} Voronoi Overlay
      </button>
    </div>
  );
}
