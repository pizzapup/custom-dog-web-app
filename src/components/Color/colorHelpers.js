import { GetColorName } from "hex-color-to-color-name";

function percentage(p) {
  return parseInt(p * 100);
}
function roundRgb(rgb) {
  const r = Math.round(rgb[0]);
  const g = Math.round(rgb[1]);
  const b = Math.round(rgb[2]);
  const newRgb = [r, g, b];
  return newRgb;
}
function roundHsl(hsl) {
  const h = percentage(hsl[0]);
  const s = percentage(hsl[1]);
  const l = percentage(hsl[2]);
  const newHsl = [h, s, l];
  return newHsl;
}
const hslString = (hsl) => `(${hsl[0]}%), (${hsl[1]}%), (${hsl[2]}%)`;
const rgbString = (rgb) => `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
function getString(color, code) {
  const string = code === "rgb" ? rgbString(color) : hslString(color);
  return string;
}
function getNtc(hex) {
  const colorName = GetColorName(hex);
  return colorName;
}

export { percentage, roundRgb, roundHsl, getNtc, getString };
