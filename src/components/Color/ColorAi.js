import { Suspense, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./colorAi.css";
import { saveAs } from "file-saver";
import ColorAiList from "./ColorAiList";
import { Canvas } from "../Upload";
export default function ColorAi() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const exportRef = useRef();

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  async function fetchProducts(e) {
    e.preventDefault();
    setLoading(true);
    const response = await openai
      .createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      })
      .catch((err) => {
        console.error(err);
        return new Error("Error getting quote");
      });
    setResult(response.data.data[0].url);
    setLoading(false);
  }
  function saveToDatabase(e) {
    console.log(result, "saved?");
  }

  return (
    <div className="color-ai">
      loading: {loading ? "loading..." : ""}
      <form>
        {/* <fieldset> */}
        {/* <legend>OpenAi API Text-to-Image</legend> */}
        <label htmlFor="prompt">Your prompt: </label>
        <textarea
          name="prompt"
          placeholder="What image would you like the AI to generate for you?"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={fetchProducts}>generate image</button>
        {/* </fieldset> */}
      </form>
      <div className="suspended-comp">
        <Suspense
          fallback={
            <>
              <div className="color-ai-loading">loading component</div>
            </>
          }
        >
          {result.length > 0 ? (
            <>
              <Canvas result={result} /> Restult: {result}
              <img
                className="result-image"
                src={result}
                alt={prompt}
                id="my-svg"
                ref={exportRef}
              />
              <button onClick={saveToDatabase}>Save to database</button>
            </>
          ) : (
            <></>
          )}
        </Suspense>
      </div>
      <ColorAiList />
    </div>
  );
}
