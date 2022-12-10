import { useState } from "react";

export default function AllActiveButton({ setClickedZone }) {
  const [isAllActive, setIsAllActive] = useState(false);

  function handleAllActive() {
    if (!isAllActive) {
      setClickedZone((prevState) => prevState.map((item) => (item = true)));
      setIsAllActive(true);
    } else {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setIsAllActive(false);
    }
  }

  return (
    <button
      className={`font-noto text-2xl ${
        isAllActive ? "bg-blue-500 text-white" : "bg-white"
      } rounded-2xl p-[0.5rem] absolute 
      border-2 hover:text-white hover:bg-blue-400
      inset-x-0 bottom-[1.75rem]`}
      onClick={handleAllActive}
    >
      {isAllActive ? "ไม่ปวดสักส่วน" : "ปวดทั่วท้อง"}
    </button>
  );
}
