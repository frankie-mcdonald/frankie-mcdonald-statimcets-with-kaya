import React, { useState, useEffect } from "react";

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
    <div>
      <div style={{ width: "200px", height: "auto" }}>
        <img
          src={frameArray[frameIndex]}
          alt="Swimming Salmon"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1>St̓át̓imcets í7wa7 Kayá</h1>
      <h3>St̓át̓imcets with Kayá</h3>
      <p>Learn St̓át̓imcets with Kayá! Fun lessons, games, and more!</p>
    </div>
  );
}

export default LandingPage;
