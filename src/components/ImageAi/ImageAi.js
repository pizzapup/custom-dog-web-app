import { Suspense, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import ImageAiList from "./ImageAiList";
import "./imageAi.css";

export default function ImageAi() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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
    const image_url = response.data.data[0].url;
    setResult(image_url);
    setLoading(false);
  }

  return (
    <div className="image-ai">
      loading:{" "}
      {loading ? (
        <div className="lds-circle">
          <div>loading</div>
        </div>
      ) : (
        <></>
      )}
      <form>
        <textarea
          name="prompt"
          placeholder="What image would you like the AI to generate for you?"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={fetchProducts}>generate image</button>
      </form>
      <div className="suspended-comp">
        <Suspense
          fallback={
            <>
              <div className="image-ai-loading">loading component</div>
            </>
          }
        >
          {result.length > 0 ? (
            <div>
              <img className="result-image" src={result} alt={prompt} />
            </div>
          ) : (
            <></>
          )}
        </Suspense>
      </div>
      <ImageAiList />
    </div>
  );
}
