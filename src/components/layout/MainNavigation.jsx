import Logo from "../ui/Logo";
import MenuList from "../ui/MenuList";
import NavBarArrow from "../ui/NavBarArrow";
import Symtomps from "../ui/Symtomps";

export default function MainNavigation({
  isNavBarOpen,
  setIsNavBarOpen,
  symtompCount,
  setSymtompCount,
}) {
  return (
    <div className="flex">
      <div
        className={`${
          isNavBarOpen ? "w-[30rem]" : "w-[8rem]"
        } duration-300 h-screen bg-blue-900 relative shadow-2xl z-20`}
      >
        <NavBarArrow setOpen={setIsNavBarOpen} isOpen={isNavBarOpen} />
        <Logo isOpen={isNavBarOpen} />
        <MenuList isOpen={isNavBarOpen} />
        <Symtomps isOpen={isNavBarOpen} count={symtompCount} />
      </div>
    </div>
  );
}
