import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Kaya from "../../assets/images/kaya.png";
import "./LandingPage.scss";

function LandingPage() {
  const frames = import.meta.glob(
    "../../assets/animations/salmon-swimming/*.png",
    {
      eager: true,
    }
  );
  const frameArray = Object.values(frames).map((module) => module.default);
  const [frameIndex, setFrameIndex] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  const maxPlays = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= frameArray.length) {
          setPlayCount((prevCount) => prevCount + 1);
          return 0;
        }

        return nextIndex;
      });
    }, 1000 / 24);

    if (playCount >= maxPlays) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [playCount]);

  return (
    <div className="landing">
      <section className="landing__hero">
        {" "}
        <img
          src={frameArray[frameIndex]}
          alt="Swimming Salmon"
          className="landing__anim"
        />
        <h1 className="landing__header">St̓át̓imcets with Kaya</h1>
      </section>
      <NavLink to={"/main"}>
        <h1 className="landing__button">Click to learn!!!</h1>
      </NavLink>
      <footer className="landing__footer">
        <div className="landing__image-div">
          <p className="landing__text">
            <span></span>
          </p>
          <img className="landing__image" src={Kaya} alt="Kaya Waving" />
        </div>

        <p className="landing__body">
          Learn St̓át̓imcets with Kayá! Fun lessons, games, and more!
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
