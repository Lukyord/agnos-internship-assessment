import { useState } from "react";

import Logo from "../ui/Logo";
import MenuList from "../ui/MenuList";
import NavBarArrow from "../ui/NavBarArrow";

export default function MainNavigation() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <div
      className={`${
        isNavBarOpen ? "w-[25rem]" : "w-[8rem]"
      } duration-300 h-screen bg-blue-900 relative`}
    >
      <NavBarArrow setOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
      <Logo setOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
      <MenuList isOpen={isNavBarOpen} />
    </div>
  );
}
