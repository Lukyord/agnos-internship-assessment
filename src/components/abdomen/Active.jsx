import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

export default function Active({ zone, mouseInBox }) {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(isNavBarOpenContext);

  return (
    <div>
      {zone == 1 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.ruqActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 2 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.epigastriumActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 3 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.luqActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 4 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.umbilicusActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 5 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.rlqActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 6 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.suprapubicActive}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 7 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.llqActive}
          className="absolute object-contain z-1"
        />
      )}
    </div>
  );
}
