import savedImages from "../../assets/ai-generated";
export default function ImageAiList() {
  return (
    <>
      <ul className="image-ai-list">
        {savedImages.map((image, index) => (
          <li key={index}>
            <img alt={image.name} src={image.src} />
          </li>
        ))}
      </ul>
    </>
  );
}
