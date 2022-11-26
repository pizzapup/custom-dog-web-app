import { useState } from "react";
import "./colorBlob.css";

export default function ColorBlob() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="blob">
        <svg viewBox="0 0 150 150">
          <ellipse cx="70" cy="45" rx="10" className="blink" />
        </svg>
        <svg viewBox="0 0 150 150">
          <ellipse cx="70" cy="45" rx="10" className="blink" />
        </svg>
        <div className="mouth">
          <svg viewBox="0 0 150 150">
            <ellipse cx="40" cy="60" rx="20%" className="blink" />
          </svg>
        </div>
      </div>
      <button onClick={() => setOpen(!open)}>
        click {open ? "mouth open" : "mouth closed"}
      </button>
    </>
  );
}
