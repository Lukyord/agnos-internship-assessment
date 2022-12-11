import { Link } from "react-router-dom";

export default function ResultButton() {
  return (
    <div className="flex justify-center pt-[7rem] gap-x-[2rem]">
      <Link to="/abdomen">
        <button
          className="font-noto text-sm bg-white rounded-md shadow-lg p-[0.35rem] 
  hover:bg-blue-400 hover:text-white"
        >
          แก้ไขอาการช่วงท้อง
        </button>
      </Link>
      <Link to="/hand">
        <button
          className="font-noto text-sm bg-white rounded-md shadow-lg p-[0.35rem]
  hover:bg-blue-400 hover:text-white"
        >
          แก้ไขอาการมือและนิ้ว
        </button>
      </Link>
    </div>
  );
}
