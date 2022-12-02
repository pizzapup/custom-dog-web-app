import { noses } from "./data";
import "./custom-dog.scss";

const Mouth = ({ mouth, mouthType, tongue, color }) => {
  return mouth !== "tongue" ? (
    <svg viewBox="0 0 3310 3310">
      <path {...mouthType} {...color} />
    </svg>
  ) : (
    <svg viewBox="0 0 3310 3310">
      <path d={mouthType.outline} {...color.outline} />
      <path d={mouthType.fill} {...color.tongue} />
    </svg>
  );
};

export default function Nose({
  stroke = "black",
  main = "black",
  nMain = "black",
  tongue = "pink",
  type = "long",
  mouth = "straight",
}) {
  const noseData = noses[type];
  const noseOptions = noseData.options;
  const mouthType = noseOptions[mouth];
  console.log(mouthType);
  const colors = {
    outline: { fill: "transparent", stroke: main },
    main: { fill: main, stroke: "transparent" },
    tongue: {
      outline: { fill: main, stroke: "transparent" },
      tongue: { fill: tongue, stroke: "transparent" },
    },
  };
  const color = colors[mouthType.className];
  return (
    <>
      <svg viewBox="0 0 3310 3310">
        <path d={noseData.path} fill={nMain} />
      </svg>
      <Mouth
        mouth={mouth}
        mouthType={mouthType}
        tongue={tongue}
        color={color}
      />
    </>
  );
}
