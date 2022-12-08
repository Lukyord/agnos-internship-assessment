import MenusData from "../ui/Menus.json";

export default function MenuList({ isOpen }) {
  const Menus = MenusData.Menus;

  return (
    <ul className="pt-[2rem] px-[2rem]">
      {Menus.map((menu, index) => (
        <li
          key={index}
          className={`flex items-center text-gray-200 text-lg 
          cursor-pointer hover:bg-white hover:bg-opacity-25 rounded-md p-2 my-[0.5rem]
          ${isOpen && "gap-x-[2rem]"}`}
        >
          <img
            src={`../../../assets/icons/${menu.src}.png`}
            className="text-white w-[2rem]"
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
