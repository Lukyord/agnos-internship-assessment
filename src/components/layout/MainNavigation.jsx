import { useState } from "react";

import Logo from "../ui/Logo";
import MenuList from "../ui/MenuList";
import NavBarArrow from "../ui/NavBarArrow";
import Symtomps from "../ui/Symtomps";

export default function MainNavigation({ isNavBarOpen, setIsNavBarOpen }) {
  const [symtomps, setSymtomps] = useState([]);

  return (
    <div className="flex">
      <div
        className={`${
          isNavBarOpen ? "w-[30rem]" : "w-[8rem]"
        } duration-300 h-screen bg-blue-900 relative shadow-2xl z-20`}
      >
        <NavBarArrow setOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
        <Logo isOpen={isNavBarOpen} />
        <MenuList
          setSymtomps={setIsNavBarOpen}
          isOpen={isNavBarOpen}
          symtomps={symtomps}
        />
        <Symtomps isOpen={isNavBarOpen} symtomps={symtomps} />
      </div>
    </div>
  );
}
