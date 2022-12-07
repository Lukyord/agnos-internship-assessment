import MenusData from "../ui/Menus.json";

export default function MenuList({ isOpen }) {
  const Menus = MenusData.Menus;

  return (
    <ul className="pt-[2rem] px-[2rem]">
      {Menus.map((menu, index) => (
        <li
          key={index}
          className={`flex flex-nowrap items-center text-gray-200 text-sm gap-x-[2rem] 
          cursor-pointer hover:bg-white hover:bg-opacity-25 rounded-md p-2 h-[3rem]`}
        >
          <img
            src={`../../../assets/icons/${menu.src}.png`}
            className="text-white w-[2rem] stroke-white"
          />
          <span
            className={`${!isOpen && "hidden"} duration-500 whitespace-nowrap`}
          >
            {menu.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
