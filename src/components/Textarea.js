import React from "react";
import { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to uppercase", "success");
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to lowercase", "success");
  };

  const handleToVoice = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    props.showAlert("Text converted to speech", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text deleted", "success");
  };

  const handleExtraSpace = () => {
    const newText = text.replaceAll(/\s{2,}/g, " ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h2 className="my-3">{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleUpperCase}
          >
            Text To Uppercase
          </button>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleLowerCase}
          >
            Text To LowerCase
          </button>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleToVoice}
          >
            Speak the Text
          </button>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className={`btn btn-primary btn-${props.theme ? props.theme : ""}`}
            onClick={handleCopyText}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="mb-2">Summary</h3>
        <p>
          {text.split(" ").filter((str) => str !== "").length} Words and{" "}
          {text.length} Characters.
        </p>
        <h3 className="mt-2">Preview</h3>
        <p className="p-4">{text}</p>
      </div>
    </>
  );
}
