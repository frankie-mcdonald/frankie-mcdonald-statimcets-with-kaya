import React, { useState, useEffect } from "react";
import Kaya from "../../assets/images/kaya.png";
import Bubble from "../../assets/icons/speech-bubble.png";
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
  const [playCount, setPlayCount] = useState(0); // Tracks how many times the animation has played

  const maxPlays = 3; // Set the number of times the animation should play

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        // Check if the animation has reached the last frame
        if (nextIndex >= frameArray.length) {
          setPlayCount((prevCount) => prevCount + 1); // Increment the play count
          return 0; // Restart at the first frame
        }

        return nextIndex;
      });
    }, 1000 / 24); // 24 FPS

    // Stop the animation after `maxPlays` cycles
    if (playCount >= maxPlays) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [playCount]);

  return (
    <div className="landing">
      <img
        src={frameArray[frameIndex]}
        alt="Swimming Salmon"
        className="landing__anim"
      />
      <h1 className="landing__header">St̓át̓imcets with Kaya</h1>
      <section className="landing__container">
        <div className="landing__bubble-container">
          <img className="landing__bubble" src={Bubble} alt="Speech bubble" />
          <p className="landing__bubble-text">
            K̓alhwá7acw Kaya <br /> nskwátsitsa
          </p>
        </div>
        <img className="landing__image" src={Kaya} alt="Kaya Waving" />
      </section>
      <p className="landing__body">
        Learn St̓át̓imcets with Kayá! Fun lessons, games, and more!
      </p>
    </div>
  );
}

export default LandingPage;
