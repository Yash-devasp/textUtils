import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [btnText, setbtnText] = useState("Dark");
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
  });

  const handleOnClick = () => {
    console.log(myStyle.color);
    if (myStyle.color === "black") {
      setmyStyle({
        backgroundColor: "black",
        color: "white",
        border: "2px solid black",
      });
      setbtnText("Light");
    } else {
      setmyStyle({
        backgroundColor: "white",
        color: "black",
        border: "2px solid white",
      });
      setbtnText("Dark");
    }
  };

  return (
    <div className="container p-2" style={myStyle}>
      <div className="list-group mt-4">
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
          style={myStyle}
        >
          <img
            src="https://github.com/twbs.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">List group item heading</h6>
              <p className="mb-0 opacity-75">
                Some placeholder content in a paragraph.
              </p>
            </div>
            <small className="opacity-50 text-nowrap">now</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
          style={myStyle}
        >
          <img
            src="https://github.com/twbs.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Another title here</h6>
              <p className="mb-0 opacity-75">
                Some placeholder content in a paragraph that goes a little
                longer so it wraps to a new line.
              </p>
            </div>
            <small className="opacity-50 text-nowrap">3d</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
          style={myStyle}
        >
          <img
            src="https://github.com/twbs.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Third heading</h6>
              <p className="mb-0 opacity-75">
                Some placeholder content in a paragraph.
              </p>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
      </div>
      <button className="mt-2 btn btn-primary" onClick={handleOnClick}>
        Enable {btnText} Mode
      </button>
    </div>
  );
}
