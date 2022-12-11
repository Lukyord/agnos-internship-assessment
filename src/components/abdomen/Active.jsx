import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

export default function Active({ zone, mouseInBox, clickedZone, isAllActive }) {
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
        <div>
          <img
            key={"ab_active_hover" + index}
            src={active.image}
            className={`absolute object-contain z-1 ${
              !(zone == index + 1 && mouseInBox && !isNavBarOpen) && "hidden"
            }`}
          />
          <img
            key={"ab_active_highlight" + index}
            src={active.image}
            className={`absolute object-contain z-1 ${
              !clickedZone[index] && "hidden"
            } ${isAllActive && "hidden"}`}
          />
        </div>
      ))}
    </div>
  );
}
