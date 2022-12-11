export default function Symtomps({ isOpen, count }) {
  return (
    <div
      className={`absolute -right-[2rem] top-[25rem] ${
        isOpen ? "w-[15rem]" : "w-[5rem]"
      } h-[5rem] border-4 border-blue-900 duration-800 rounded-2xl flex items-center justify-center
      ${count > 0 ? "bg-blue-700" : "bg-white"}`}
    >
      <p
        className={`text-5xl font-bold px-[0.75rem] py-[0.4rem] rounded-2xl duration-500
      ${count > 0 ? "bg-blue-400 text-white" : "bg-gray-300 text-gray-600"}`}
      >
        {count}
      </p>
      <p
        className={`${
          !isOpen && "hidden"
        } pl-[2rem] duration-300 text-3xl font-noto
        ${count > 0 && "text-white"}`}
      >
        {count > 0 ? "ต่อไป" : "ไม่มีอาการ"}
      </p>
    </div>
  );
}
