import { useState } from "react";

import Logo from "../ui/Logo";
import MenuList from "../ui/MenuList";
import NavBarArrow from "../ui/NavBarArrow";
import Symtomps from "../ui/Symtomps";

export default function MainNavigation() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [symtomp, setSymtomp] = useState([]);

  return (
    <div
      className={`${
        isNavBarOpen ? "w-[23rem]" : "w-[8rem]"
      } duration-300 h-screen bg-blue-900 relative`}
    >
      <NavBarArrow setOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
      <Logo isOpen={isNavBarOpen} />
      <MenuList isOpen={isNavBarOpen} />
      <Symtomps isOpen={isNavBarOpen} symtomp={symtomp} />
    </div>
  );
}
