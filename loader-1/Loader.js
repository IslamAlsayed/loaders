import "./Loader.css";
import React, { useEffect } from "react";
import LoaderImage from "./loader.svg";

export default function Loader() {
  // useEffect(() => {
  setInterval(() => {
    document.querySelector(".loader-container").classList.remove("show");
  }, 1500);
  // });

  return (
    <div className="loader-container show" id="loader">
      <div className="loader">
        <img src={LoaderImage} alt="loader" />
      </div>
    </div>
  );
}
