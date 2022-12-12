export default function Others({
  setClickedZone,
  isOthers,
  setIsOthers,
  setHandSymtomp,
}) {
  function handleOthers() {
    if (!isOthers) {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setHandSymtomp("ข้ออื่นๆ หรือ ไม่ปวดบริเวณข้อ");
      setIsOthers(true);
    } else if (isOthers) {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setHandSymtomp("ไม่มีอาการปวดข้อนิ้ว");
      setIsOthers(false);
    }
  }

  return (
    <button
      className={`font-noto text-2xl ${
        isOthers ? "bg-blue-500 text-white" : "bg-white"
      } rounded-2xl p-[0.5rem] absolute 
      border-2 hover:text-white hover:bg-blue-400
      inset-x-0 bottom-[0.9rem]`}
      onClick={handleOthers}
    >
      ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ
    </button>
  );
}
