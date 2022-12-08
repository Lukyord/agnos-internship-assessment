export default function Symtomps({ isOpen, symtomp }) {
  return (
    <div
      className={`absolute -right-[2rem] top-[25rem] ${
        isOpen ? "w-[15rem]" : "w-[5rem]"
      } h-[5rem] bg-white border-4 border-blue-900 duration-800 rounded-2xl flex items-center justify-center
      }`}
    >
      <p className="text-5xl text-gray-600 font-bold bg-gray-300 px-[0.75rem] py-[0.4rem] rounded-2xl duration-500">
        {symtomp.length}
      </p>
      <p
        className={`${
          !isOpen && "hidden"
        } pl-[2rem] duration-300 text-3xl font-noto`}
      >
        ไม่มีอาการ
      </p>
    </div>
  );
}
