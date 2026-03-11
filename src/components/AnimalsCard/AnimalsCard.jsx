import "./AnimalsCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Volume from "../../assets/icons/volume.png";

function AnimalsCard() {
  const baseURL = import.meta.env.VITE_API_URL;

  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAnimals() {
      try {
        const response = await axios.get(`${baseURL}/animals`);
        setAnimals(response.data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getAnimals();
  }, []);

  if (isLoading) {
    return <p>Loading animals...</p>;
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
    <ul className="animals__cards">
      {animals.map((animals) => (
        <li key={animals.id} className="animals-card">
          <h3 className="animals-card__title">{animals.translation}</h3>
          <h4 className="animals-card__body">
            Click image to hear the pronunciation!!
          </h4>
          <div
            onClick={() => playAudio(animals.audio)}
            className="animals-card__div"
          >
            <img
              className="animals-card__image"
              src={`${baseURL}${animals.image}`}
              alt=""
            />
            <img className="animals-card__icon" src={Volume} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AnimalsCard;
