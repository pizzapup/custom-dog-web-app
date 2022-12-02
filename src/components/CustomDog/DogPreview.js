import Body from "./assets/Body/Body";
import Eyes from "./assets/Eyes";
import Nose from "./assets/Snout";

function DogPreview() {
  return (
    <>
      <div className="chonk-container">
        <Body type="regular" main="#c7875b" />
        <Nose />
        <Eyes type="squinty" />
      </div>
    </>
  );
}

export default DogPreview;
