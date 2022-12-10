import AbdomenImages from "../../../assets/images/abdomen/AbdomenImages";

export default function Highlight({ clickedZone }) {
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
