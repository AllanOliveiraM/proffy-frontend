import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import lang from "../../assets/lang/pt-br/index.json";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt={lang.logoAlt} />
          <h2>{lang.landingSlogan}</h2>
        </div>

        <img src={landingImg} alt={lang.studyPlatform} className="hero-image" />

        <div className="buttons-container">
          <a href="#todo" className="study">
            <img src={studyIcon} alt={lang.studyString} />
            {lang.studyString}
          </a>

          <a href="#todo" className="give-classes">
            <img src={giveClassesIcon} alt={lang.giveClasses} />
            {lang.giveClasses}
          </a>
        </div>

        <span className="total-connections">
          {lang.totalOf}
          {` ${200} `}
          {lang.connectionsReady}{" "}
          <img src={purpleHeartIcon} alt={lang.purpleHeart} />
        </span>
      </div>
    </div>
  );
}

export default Landing;
