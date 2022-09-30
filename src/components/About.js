import React from "react";

export default function About() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./images/ebg.jpg"
          className="card-img"
          alt="Background"
          height="800px"
        />
        <div className="card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-o text-secondary">
              About Us
            </h5>
            <p className="card-text lead fs-2 text-secondary">
              Check Out All The Trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
