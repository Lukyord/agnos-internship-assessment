import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

export default function Highlight({ zone, mouseInBox }) {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(isNavBarOpenContext);

  return (
    <div>
      {zone == 1 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.ruqHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 2 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.epigastriumHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 3 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.luqHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 4 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.umbilicusHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 5 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.rlqHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 6 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.suprapubicHighlight}
          className="absolute object-contain z-1"
        />
      )}
      {zone == 7 && mouseInBox && !isNavBarOpen && (
        <img
          src={AbdomenImages.llqHighlight}
          className="absolute object-contain z-1"
        />
      )}
    </div>
  );
}
