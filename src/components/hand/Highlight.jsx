import HandImages from "../../../assets/images/hand/HandImages";

export default function Highlight({ clickedZone }) {
  const HandHighlights = [
    { image: HandImages.dipHighlight },
    { image: HandImages.pipHighlight },
    { image: HandImages.mcpHighlight },
  ];

  return (
    <div>
      {HandHighlights.map((highlight, index) => (
        <div>
          <img
            key={"hand_highlight" + index}
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
