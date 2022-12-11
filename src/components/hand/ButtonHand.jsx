export default function ButtonHand() {
  return (
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
  );
}
