import "./GameCard.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

function GameCard() {
  const baseURL = import.meta.env.VITE_API_URL;

  const frames = import.meta.glob(
    "../../assets/animations/salmon-swimming/*.png",
    { eager: true }
  );
  const frameArray = Object.values(frames).map((module) => module.default);

  const [frameIndex, setFrameIndex] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    async function getQuizzes() {
      try {
        const response = await axios.get(`${baseURL}/quiz`);
        setQuiz(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setError(err.message || "Failed to fetch quizzes.");
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, [baseURL]);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frameArray.length);
    }, 1000 / 18);

    return () => clearInterval(interval);
  }, []);

  const handleAnswerClick = (quizId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizId]: selectedOption,
    }));
  };

  if (loading) {
    return <div>Loading quizzes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="gamecard">
        {quiz.map((quizItem) => {
          const displayCount = parseInt(quizItem.number, 10) || 0;

          return (
            <div key={quizItem.id} className="gamecard__container">
              <h1 className="gamecard__title">
                {quizItem.id}. {quizItem.question}
              </h1>
              <div className="gamecard__animation-container">
                {Array.from({ length: displayCount }).map((_, index) => (
                  <img
                    key={index}
                    src={frameArray[frameIndex]}
                    alt="Swimming Salmon"
                    className="gamecard__animation"
                  />
                ))}
              </div>
              <ul className="gamecard__list">
                {["a", "b", "c", "d"].map((option) => {
                  const isCorrect =
                    selectedAnswers[quizItem.id] === quizItem.answer;
                  const isSelected =
                    selectedAnswers[quizItem.id] === quizItem[option];

                  return (
                    <li
                      key={option}
                      className={`gamecard__item ${
                        isSelected ? (isCorrect ? "correct" : "selected") : ""
                      }`}
                      onClick={() =>
                        handleAnswerClick(quizItem.id, quizItem[option])
                      }
                    >
                      {quizItem[option]}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
      <NavBar />
    </>
  );
}

export default GameCard;
