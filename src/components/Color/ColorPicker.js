import { useState } from "react";
export function PaletteBox(props) {
  const randomKey = () => {
    return "_" + Math.random().toString(36).substring(2, 9);
  };
  return (
    <>
      <div className="palette-box">
        {[...Array(5)].map(() => (
          <ColorPalette key={randomKey} />
        ))}
      </div>
    </>
  );
}
export default function ColorPalette() {
  const [copied, setCopied] = useState(true);
  const [rgb, setRgb] = useState("");
  const [hex, setHex] = useState("");
  const randomKey = () => {
    return "_" + Math.random().toString(36).substring(2, 9);
  };
  const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };
  function generateColor() {
    let r = generateRandomRGB();
    let g = generateRandomRGB();
    let b = generateRandomRGB();
    setRgb(`rgb(${r},${g},${b})`);
    setHex(RGBToHex(rgb));
  }
  function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : "";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16),
      g = (+rgb[0]).toString(16),
      b = (+rgb[0]).toString(16);
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    return `#${r}${g}${b}`.toUpperCase();
  }
  const copyColor = () => {
    navigator.clipboard.writeText(rgb);
    setCopied("copied!");
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };
  function Box() {
    return (
      <>
        <div className="ColorBox">
          <div className="ColorBox-ColorName" style={{ backgroundColor: rgb }}>
            hello rgb: {rgb} hex: {hex}
            <button onClick={generateColor}>new color</button>
            <button onClick={copyColor}>
              {copied ? "copied!" : `copy color: ${rgb}`}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="palette-box">
        {[...Array(5)].map(() => (
          <Box key={randomKey} />
        ))}
      </div>
    </>
  );
}
