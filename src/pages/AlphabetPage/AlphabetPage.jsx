import "./AlphabetPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

function AlphabetPage() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [alphabet, setAlphabet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAlphabet() {
      try {
        const response = await axios.get(`${baseURL}/alphabet`);
        setAlphabet(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching alphabet", error);
      } finally {
        setIsLoading(false);
      }
    }
    getAlphabet();
  }, []);
  if (isLoading) {
    return <p>Loading alphabet</p>;
  }
  return (
    <>
      <Header />
      <section className="alphabet">
        <ul className="alphabet__list">
          {alphabet.map((alphabet) => (
            <li key={alphabet.id} className="alphabet__item">
              {alphabet.letter}
            </li>
          ))}
        </ul>
      </section>
      <NavBar />
    </>
  );
}

export default AlphabetPage;
