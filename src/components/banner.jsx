import React from "react";
import { FaLeaf } from "react-icons/fa";
import "./banner.css";

export default function Banner() {
  return (
    <section className="farm-banner">
      <div className="farm-banner-inner">
        <div className="farm-brand">
          <FaLeaf className="farm-leaf" />
          <div className="farm-title">
            <h1>FarmFresh</h1>
            <p className="farm-sub">Fresh, organic produce delivered to your door.</p>
          </div>
        </div>

        <div className="farm-cta">
          <a className="btn primary" href="#products">Shop Now</a>
          <a className="btn outline" href="#about">Learn More</a>
        </div>
      </div>
    </section>
  );
}