import {
  MapIcon,
  ClockIcon,
  AcademicCapIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";

export default function OurService() {
  return (
    <div
      className="w-[45rem] h-[12rem] bg-slate-200 rounded-2xl shadow-2xl mb-[5rem]
flex flex-col text-center"
    >
      <h1 className="py-[1.5rem] text-2xl text-slate-700 font-noto">
        บริการของเรา
      </h1>
      <div className="grid grid-cols-8 gap-y-[1rem] text-start place-items-start">
        <MapIcon className="h-[2rem] pl-[2rem] text-indigo-600 justify-end col-start-2 col-end-3" />
        <p className="font-noto text-md col-start-3 col-end-4 whitespace-nowrap text-slate-700">
          ตรวจโรคได้ด้วยตนเอง
        </p>
        <BookmarkIcon className="h-[2rem] pl-[2rem] text-indigo-600 justify-end col-start-5 col-end-6" />
        <p className="font-noto text-md col-start-6 col-end-7 whitespace-nowrap text-slate-700">
          Interface น่าใช้
        </p>
        <ClockIcon className="h-[2rem] pl-[2rem] text-indigo-600 justify-end col-start-2 col-end-3" />
        <p className="font-noto text-md col-start-3 col-end-4 whitespace-nowrap text-slate-700">
          ใช้ง่าย เข้าถึงง่าย
        </p>
        <AcademicCapIcon className="h-[2rem] pl-[2rem] text-indigo-600 justify-end col-start-5 col-end-6" />
        <p className="font-noto text-md col-start-6 col-end-7 whitespace-nowrap text-slate-700">
          คลอบคลุมทุกกลุ่มเสี่ยง
        </p>
      </div>
    </div>
  );
}
