import savedImages from "../../assets/ai-generated";
import "./colorAi.css";
export default function ColorAiList() {
  return (
    <>
      <ul className="color-ai-list">
        {savedImages.map((image, index) => (
          <li key={index}>
            <img alt={image.name} src={image.src} />
          </li>
        ))}
      </ul>
    </>
  );
}
