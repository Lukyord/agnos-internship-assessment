import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

import HandImages from "../../../assets/images/hand/HandImages";

export default function Active({ zone, mouseInBox, clickedZone, isAllActive }) {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(isNavBarOpenContext);
  const HandHighlights = [
    { image: HandImages.dipActive },
    { image: HandImages.pipActive },
    { image: HandImages.mcpActive },
  ];

  return (
    <div>
      {HandHighlights.map((active, index) => (
        <div>
          <img
            key={index}
            src={active.image}
            className={`absolute object-contain z-1 ${
              !(zone == index + 1 && mouseInBox && !isNavBarOpen) && "hidden"
            }`}
          />
          <img
            key={index}
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
