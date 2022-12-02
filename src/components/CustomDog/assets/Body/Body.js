import Chonky from "./Chonky";
import Medium from "./Medium";
import Regular from "./Regular";

const list = { chonky: Chonky, medium: Medium, regular: Regular };

export default function Body({
  type = "chonky",
  main = "#c7875b",
  outline = "black",
}) {
  const Component = list[type];
  return <Component main={main} outline={outline} />;
}
