import "./AlphabetPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import AlphabetCard from "../../components/AlphabetCard/AlphabetCard";

function AlphabetPage() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [alphabet, setAlphabet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLetterData, setSelectedLetterData] = useState(null);

  useEffect(() => {
    async function getAlphabet() {
      try {
        const response = await axios.get(`${baseURL}/alphabet`);
        setAlphabet(response.data);
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

  const handleLetterClick = (letterData) => {
    setSelectedLetterData(letterData);
  };
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
    <>
      <Header />
      <h1 className="alphabet__header">St̓át̓imcets Alphabet</h1>
      <section className="alphabet">
        {" "}
        <div className="alphabet__flex">
          {" "}
          {selectedLetterData && <AlphabetCard details={selectedLetterData} />}
          <h2 className="alphabet__subheader">
            Click a letter to hear the pronunciation
          </h2>
        </div>
        <ul className="alphabet__list">
          {alphabet.map((item) => (
            <li
              key={item.id}
              className="alphabet__item"
              onClick={() => handleLetterClick(item)}
            >
              {item.letter}
            </li>
          ))}
        </ul>
      </section>

      <NavBar />
    </>
  );
}

export default AlphabetPage;
