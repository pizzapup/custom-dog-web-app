import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";
import { roundRgb, roundHsl, getNtc, getString } from "./colorHelpers";
import "./colorPalette.css";

export default function ColorPalette() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [newPalette, setNewPalette] = useState(null);
  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  function handleSubmit(e) {
    e.preventDefault();
    const colors = [];
    Vibrant.from(fileDataURL)
      .maxColorCount(200)
      .getPalette((err, palette) => {
        for (var swatch in palette) {
          const currSwatch = palette[swatch];
          colors.push({
            swatch: swatch,
            rgb: roundRgb(currSwatch.getRgb()),
            hex: currSwatch.getHex(),
            hsl: roundHsl(currSwatch.getHsl()),
            titleText: currSwatch.getTitleTextColor(),
            bodyText: currSwatch.getBodyTextColor(),
            population: currSwatch.getPopulation(),
            colorName: getNtc(currSwatch.getHex()),
          });
        }
        setNewPalette(colors);
        console.table(newPalette);
      });
  }

  return (
    <>
      <h1>Palette Generator</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Palette Generator</legend>
          <label htmlFor="image"> Browse images </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
          <button type="submit">generate palette</button>
        </fieldset>
      </form>
      {newPalette ? (
        <>
          <div className="img-wrapper">
            <img src={fileDataURL} alt="preview" />
          </div>
          <ul className="swatch-list">
            {newPalette.map((swatch, index) => {
              return (
                <li
                  key={index}
                  style={{
                    "--color-bg": swatch.hex,
                    "--color-title": swatch.titleText,
                    "--color-body": swatch.bodyText,
                  }}
                  className="swatch"
                >
                  <ul className="swatch">
                    Swatch: {swatch.swatch}
                    <li>rgb: {getString(swatch.rgb, "rgb")}</li>
                    <li>hex: {swatch.hex}</li>
                    <li>hsl: {getString(swatch.hsl, "hsl")}</li>
                    <li>name: {swatch.colorName}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
