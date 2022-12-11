import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Symtomps({
  isOpen,
  symtompCount,
  setSymtompCount,
  handSymtomp,
  abdomenSymtomp,
  setIsNavBarOpen,
}) {
  useEffect(() => {
    let abdomenSymtompCount = 0;
    let handSymtompCount = 0;
    if (abdomenSymtomp !== "ไม่มีอาการปวดท้อง") {
      abdomenSymtompCount = 1;
    } else {
      abdomenSymtompCount = 0;
    }

    if (handSymtomp !== "ไม่มีอาการปวดข้อนิ้ว") {
      handSymtompCount = 1;
    } else {
      handSymtompCount = 0;
    }

    setSymtompCount(abdomenSymtompCount + handSymtompCount);
  }, [handSymtomp, abdomenSymtomp]);

  function handleClick() {
    setIsNavBarOpen(false);
  }

  return (
    <div
      className={`absolute -right-[2rem] top-[25rem] ${
        isOpen ? "w-[15rem]" : "w-[5rem]"
      } h-[5rem] border-4 border-blue-900 duration-800 rounded-2xl flex items-center justify-center
      ${symtompCount > 0 ? "bg-blue-700" : "bg-white"}`}
    >
      <p
        className={`text-5xl font-bold px-[0.75rem] py-[0.4rem] rounded-2xl duration-500
      ${
        symtompCount > 0
          ? "bg-blue-400 text-white"
          : "bg-gray-300 text-gray-600"
      }`}
      >
        {symtompCount}
      </p>
      <p
        className={`${
          !isOpen && "hidden"
        } pl-[2rem] duration-300 text-3xl font-noto
        ${symtompCount > 0 && "text-white"}`}
        onClick={handleClick}
      >
        {symtompCount > 0 ? <Link to="/result">ดูผลตรวจ</Link> : "ไม่มีอาการ"}
      </p>
    </div>
  );
}
