// import { getStorage, ref } from "firebase/storage";
import { useEffect, useRef } from "react";
import { saveAs } from "file-saver";
// // Create a root reference
// const storage = getStorage();

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, "mountains.jpg");

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, "images/mountains.jpg");

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name; // true
// mountainsRef.fullPath === mountainImagesRef.fullPath; // false
// function saveCanvas() {
//   const canvas = document.getElementById("canvas");
//   canvas.toBlob((blob) => {
//     const newImg = document.createElement("img");
//     const url = URL.createObjectURL(blob);
//     newImg.onload = () => {
//       // no longer need to read the blob so it's revoked
//       URL.revokeObjectURL(url);
//     };
//     newImg.src = url;
//     document.body.appendChild(newImg);
//   });
// }
export const Canvas = ({ result }) => {
  const myCanvas = useRef();

  useEffect(() => {
    const canvas = myCanvas.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = `${result}`;
    image.onload = () => {
      context.drawImage(image, 0, 0, 500, 500);
    };
  }, []);
  return (
    <canvas ref={myCanvas} width="500" height="500" id="my-canvas canvas" />
  );
};
export default function Upload() {
  return <>upload</>;
}
