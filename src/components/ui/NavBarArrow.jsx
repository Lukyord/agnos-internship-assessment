import leftArrow from "../../../assets/icons/left-arrow.png";
import rightArrow from "../../../assets/icons/right-arrow.png";

export default function NavBarArrow({ setIsNavBarOpen, isOpen }) {
  return (
    <img
      src={isOpen ? leftArrow : rightArrow}
      className="absolute cursor-pointer rounded-full bg-white -right-3 top-9 
        w-[3rem] p-[0.5rem] border-2 border-blue-900 z-50"
      onClick={() => setIsNavBarOpen(!isOpen)}
    />
  );
}
