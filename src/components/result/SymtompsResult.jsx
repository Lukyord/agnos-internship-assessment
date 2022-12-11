export default function SymtompsResult({ abdomen, hand }) {
  return (
    <div>
      <h1 className="font-noto text-6xl font-bold pt-[3rem] text-center underline">
        ผลการตรวจ
      </h1>
      <div className="text-left text-start pl-[5rem] pt-[4rem]">
        <p className="font-noto text-3xl font-bold py-[1rem]">ช่วงท้อง</p>
        <p className="font-noto text-xl pl-[3rem] py-[1rem] italic text-blue-400">
          {"-  " + abdomen}
        </p>
        <p className="font-noto text-3xl font-bold py-[1rem]">มือและนิ้ว</p>
        <p className="font-noto text-xl pl-[3rem] py-[1rem] italic text-blue-400">
          {"-  " + hand}
        </p>
      </div>
    </div>
  );
}
