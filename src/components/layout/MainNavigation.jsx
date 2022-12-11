import Logo from "../ui/Logo";
import MenuList from "../ui/MenuList";
import NavBarArrow from "../ui/NavBarArrow";
import Symtomps from "../ui/Symtomps";

export default function MainNavigation({
  isNavBarOpen,
  setIsNavBarOpen,
  symtompCount,
  setSymtompCount,
  abdomenSymtomp,
  handSymtomp,
}) {
  return (
    <div className="flex">
      <div
        className={`${
          isNavBarOpen ? "w-[30rem]" : "w-[8rem]"
        } duration-300 h-screen bg-blue-900 relative shadow-2xl z-20`}
      >
        <NavBarArrow setIsNavBarOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
        <Logo isOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
        <MenuList isOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
        <Symtomps
          isOpen={isNavBarOpen}
          symtompCount={symtompCount}
          setSymtompCount={setSymtompCount}
          abdomenSymtomp={abdomenSymtomp}
          handSymtomp={handSymtomp}
          setIsNavBarOpen={setIsNavBarOpen}
        />
      </div>
    </div>
  );
}
