import MenusData from "../ui/Menus.json";
import { Link } from "react-router-dom";

export default function MenuList({ isOpen, setSymtomps, symtomps }) {
  const Menus = MenusData.Menus;

  return (
    <ul className="pt-[2rem] px-[2rem]">
      {Menus.map((menu, index) => (
        <Link to={`${menu.link}`} key={"menu" + index}>
          <li
            className={`flex items-center text-gray-200 text-lg 
          cursor-pointer hover:bg-white hover:bg-opacity-25 rounded-md p-2 my-[0.5rem]
          ${isOpen && "gap-x-[2rem]"}`}
          >
            <img
              src={`../../../assets/icons/${menu.src}.png`}
              className="text-white w-[2rem]"
            />
            <span
              className={`${
                !isOpen && "hidden"
              } duration-500 whitespace-nowrap font-noto`}
            >
              {menu.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
