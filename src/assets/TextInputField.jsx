import React, { useState } from "react";
import "./TextInputField.css";

const TextInputField = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [input, setinput] = useState("Tiger in water");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const query = async (data) => {
    try {
      console.log("Fetching...");
      setloading(true);
      const res = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      console.log("Got the res");
      setloading(false);
      const result = await res.blob();
      const imageUrl = URL.createObjectURL(result);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
      seterror(true);
    }
  };

  const handleButtonClick = () => {
    query({ inputs: input });
  };

  const handleSaveButtonClick = () => {
    // Implement logic to save the image, for example:
    const a = document.createElement("a");
    a.href = imageSrc;
    a.download = "image.jpg";
    a.click();
  };

  return (
    <>
      <input
        className="input-field"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
        type="text"
        name=""
        id=""
      />
      <div className="note">
        <span className="note"><strong>Note : </strong>"The quality of your prompt directly correlates with the clarity and effectiveness of the resulting image."</span>
      </div>
      <button onClick={handleButtonClick}>
        <svg
          height="24"
          width="29"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Launch</span>
      </button>

      <div>
        {loading && (
          <div className="">
            <div className="relative loader"></div>
            <span>"Your masterpiece is in the making... Please wait."</span>
          </div>
        )}
        {error && (
          <div className="">
            High demand alert! We're optimizing our servers to better serve you.
            Try again in a bit....
          </div>
        )}
        {imageSrc && (
          <div className="">
            <img className="loading-image" src={imageSrc} alt="Fetched Image" />

            <button
              className="download-button"
              onClick={handleSaveButtonClick}
            >
              <span>Download&nbsp;</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TextInputField;
