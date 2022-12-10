import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

export default function Active({ zone, mouseInBox }) {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(isNavBarOpenContext);
  const AbdomenActives = [
    { image: AbdomenImages.ruqActive },
    { image: AbdomenImages.epigastriumActive },
    { image: AbdomenImages.luqActive },
    { image: AbdomenImages.umbilicusActive },
    { image: AbdomenImages.rlqActive },
    { image: AbdomenImages.suprapubicActive },
    { image: AbdomenImages.llqActive },
  ];

  return (
    <div>
      {AbdomenActives.map((active, index) => (
        <img
          key={index}
          src={active.image}
          className={`absolute object-contain z-1 ${
            !(zone == index + 1 && mouseInBox && !isNavBarOpen) && "hidden"
          }`}
        />
      ))}
    </div>
  );
}
