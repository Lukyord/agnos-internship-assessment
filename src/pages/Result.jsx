export default function Result({ abdomenSymptomp, handSymtomp }) {
  return (
    <div
      className="h-screen w-full bg-gradient-to-r from-blue-900 to-cyan-400 
    flex justify-center items-center"
    >
      <div className="bg-slate-100 w-[50rem] h-[40rem] rounded-2xl shadow-2xl flex flex-col items-center">
        <h1 className="font-noto text-6xl font-bold pt-[2rem]">ผลการตรวจ</h1>
        <p>{abdomenSymptomp}</p>
        <p>{handSymtomp}</p>
      </div>
    </div>
  );
}
