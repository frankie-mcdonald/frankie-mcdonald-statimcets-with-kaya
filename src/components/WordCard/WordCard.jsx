import "./WordCard.scss";
import volume from "../../assets/icons/volume-black.png";
import axios from "axios";
import { useState, useEffect } from "react";

function WordCard() {
  const baseURL = import.meta.env.VITE_API_URL;

  const [randomWords, setRandomWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRandomWords() {
      try {
        const response = await axios.get(`${baseURL}/random`);
        setRandomWords(response.data);
      } catch (error) {
        console.error("Error fetching random words:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getRandomWords();
  }, [baseURL]);

  if (isLoading) {
    return <p>Loading random words...</p>;
  }

  if (!randomWords.length) {
    return <p>No data available.</p>;
  }
  const currentItem = randomWords[currentIndex];
  // Play audio dynamically
  const playAudio = (audioUrl) => {
    const audio = new Audio(`${baseURL}${audioUrl}`);
    audio.play();
  };
  const nextWord = () => {
    const nextIndex = Math.floor(Math.random() * randomWords.length); // Get a random index
    setCurrentIndex(nextIndex);
  };
  return (
    <section className="random-card">
      <button className="word-card__next" onClick={nextWord}>
        Click here to genrate new word and phrase!
      </button>
      <div className="word-card">
        <h1 className="word-card__heading">Random word!</h1>
        <div
          className="word-card__button"
          onClick={() => playAudio(currentItem["word-audio"])} // Play word audio
        >
          <img src={volume} className="word-card__icon" alt="Play audio" />
          {currentItem.word}
        </div>
        <h3 className="word-card__body">{currentItem["word-translation"]}</h3>
      </div>
      <div className="word-card phrase-card">
        <h1 className="word-card__heading">
          {currentItem.word} used in a sentence
        </h1>
        <div
          className="word-card__button"
          onClick={() => playAudio(currentItem["phrase-audio"])}
        >
          <img src={volume} className="word-card__icon" alt="Play audio" />
          {currentItem.phrase}
        </div>
        <h3 className="word-card__body">{currentItem["phrase-translation"]}</h3>
      </div>
    </section>
  );
}

export default WordCard;
