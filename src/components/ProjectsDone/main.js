import React from "react";
import "./projectDone.css";
import Work from "./work";
import FAQ from "./Faq";

const Main = () => {
  return (
    <>
      <div className="main-layout">
        <h3>
          Building <strong className="purple"> Digital </strong> Products,
          <strong className="purple"> Brands </strong>
        </h3>
        <h3>
          And <strong className="purple"> Experience </strong>
        </h3>
        <p>
          Create dynamic websites with
          <strong className="purple"> React </strong> and
          <strong className="purple"> Node.js </strong> based on your
          requirements.
        </p>
        <p>
          Provide <strong className="purple"> Digital Signage </strong>{" "}
          Solutions
        </p>

        <a
          href="https://www.linkedin.com/in/saad-mehmood-537903213/"
          target="_blank"
        >
          <button className="purple-btn">Connect with me </button>
        </a>
      </div>

      <h3 className="work-heading">WORK</h3>
      <Work />
    </>
  );
};
export default Main;
