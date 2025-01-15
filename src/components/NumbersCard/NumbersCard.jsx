import "./NumbersCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
// import Kaya1 from "../../assets/images/kaya-1.jpg";
import Volume from "../../assets/icons/volume.png";

function NumbersCard() {
  const baseURL = import.meta.env.VITE_API_URL;
  // console.log("BASE URL", baseURL);

  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getNumbers() {
      try {
        const response = await axios.get(`${baseURL}/numbers`);
        setNumbers(response.data);
      } catch (error) {
        console.error("Error fetching numbers:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getNumbers();
  }, []);

  if (isLoading) {
    return <p>Loading numbers...</p>;
  }
  const playAudio = (audioUrl) => {
    const fullUrl = audioUrl.startsWith("http")
      ? audioUrl
      : `${baseURL}${audioUrl}`;
    const audio = new Audio(fullUrl);

    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };
  return (
    <ul>
      <h4 className="number-card__body">
        Click images to hear pronunciation of each word!
      </h4>
      {numbers.map((number) => (
        <li
          key={number.id}
          onClick={() => playAudio(number.audio)}
          className="number-card"
        >
          <h3 className="number-card__title">{number.translation}</h3>
          <img
            className="number-card__image"
            src={`${baseURL}${number.image}`}
            alt=""
          />
          <img className="number-card__icon" src={Volume} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default NumbersCard;
