import icon from "../../../assets/icons/diagnosis_icon.png";

import { Link } from "react-router-dom";

export default function Logo({ isOpen }) {
  return (
    <Link to="/">
      <div className="flex gap-x-4 pt-[1rem] pl-[1rem]">
        <img
          src={icon}
          className={`cursor-pointer duration-500 object-contain border-2 rounded-xl bg-white
        ${isOpen && "rotate-[360deg]"}`}
        />

        <h1
          className={`text-4xl italic font-extrabold px-[1rem] duration-300 ${
            !isOpen && "scale-0"
          }`}
        >
          <p className="text-blue-400">BASIc</p>{" "}
          <p className="text-cyan-400">DIAGNOSEs</p>
        </h1>
      </div>
    </Link>
  );
}
