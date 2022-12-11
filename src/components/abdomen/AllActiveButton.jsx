export default function AllActiveButton({
  setClickedZone,
  isAllActive,
  setIsAllActive,
  setAbdomenSymtomp,
}) {
  function handleAllActive() {
    if (!isAllActive) {
      setClickedZone((prevState) => prevState.map((item) => (item = true)));
      setIsAllActive(true);
      setAbdomenSymtomp("ปวดทั่วท้อง");
    } else {
      setClickedZone((prevState) => prevState.map((item) => (item = false)));
      setIsAllActive(false);
      setAbdomenSymtomp("ไม่มีอาการปวดท้อง");
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
