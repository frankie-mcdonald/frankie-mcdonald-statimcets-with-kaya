import "./NumbersCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
// import Kaya1 from "../../assets/images/kaya-1.jpg";
import Volume from "../../assets/icons/volume.png";

function NumbersCard() {
  const baseURL = import.meta.env.VITE_API_URL;
  console.log("BASE URL", baseURL);

  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getNumbers() {
      try {
        const response = await axios.get(`${baseURL}/numbers`);
        setNumbers(response.data);
        console.log(response.data);
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
  return (
    <ul>
      {numbers.map((number) => (
        <figure key={number.id} className="number-card">
          <img
            className="number-card__image"
            src={`${baseURL}${number.image}`}
            alt=""
          />
          <h1>{number.translation}</h1>
          <img className="number-card__icon" src={Volume} alt="" />
        </figure>
      ))}
    </ul>
  );
}

export default NumbersCard;
