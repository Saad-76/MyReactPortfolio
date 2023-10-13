import React from "react";
import "./projectDone.css";
import Work from "./work";

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

        <a href="https://www.upwork.com/freelancers/~01c2ba10a966c005a3">
          <button className="purple-btn">Connect with me </button>
        </a>
      </div>

      <h3 className="work-heading">WORK</h3>
      <Work />
    </>
  );
};
export default Main;
