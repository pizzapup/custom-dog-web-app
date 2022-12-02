import { eyes } from "./data";
import "./custom-dog.scss";

export default function Eyes({
  type = "squinty",
  base = "white",
  main = "green",
  outline = "black",
  rBase = "white",
  rMain = "green",
  rOutline = "black",
}) {
  const colors = {
    base: { fill: base, stroke: base },
    main: { fill: main, stroke: main },
    outline: { stroke: outline },
    rBase: { fill: rBase, stroke: rBase },
    rMain: { fill: rMain, stroke: rMain },
    rOutline: { stroke: rOutline },
  };
  const eyesData = eyes[type];
  const list = [];
  for (let p in eyesData) {
    list.push({ ...eyesData[p], ...colors[p] });
  }
  return (
    <>
      <svg viewBox="0 0 3310 3310">
        {list.map((info, index) => (
          <path key={index} {...info} />
        ))}
      </svg>
    </>
  );
}
