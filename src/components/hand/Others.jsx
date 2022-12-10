export default function Others({ setClickedZone, isOthers, setIsOthers }) {
  function handleOthers() {
    if (!isOthers) {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setIsOthers(true);
    } else {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setIsOthers(false);
    }
  }

  return (
    <button
      className={`font-noto text-2xl ${
        isOthers ? "bg-blue-500 text-white" : "bg-white"
      } rounded-2xl p-[0.5rem] absolute 
      border-2 hover:text-white hover:bg-blue-400
      inset-x-0 bottom-[1.75rem]`}
      onClick={handleOthers}
    >
      ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ
    </button>
  );
}
