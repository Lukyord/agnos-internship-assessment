import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

import { isNavBarOpenContext } from "../../Helper/Context";
import { useContext } from "react";

export default function Highlight({ zone, mouseInBox, clickedZone }) {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(isNavBarOpenContext);
  const AbdomenHighlights = [
    { image: AbdomenImages.ruqHighlight },
    { image: AbdomenImages.epigastriumHighlight },
    { image: AbdomenImages.luqHighlight },
    { image: AbdomenImages.umbilicusHighlight },
    { image: AbdomenImages.rlqHighlight },
    { image: AbdomenImages.suprapubicHighlight },
    { image: AbdomenImages.llqHighlight },
  ];

  return (
    <div>
      {AbdomenHighlights.map((highlight, index) => (
        <div>
          <img
            key={index}
            src={highlight.image}
            className={`absolute object-contain z-1 ${
              !clickedZone[index] && "hidden"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
