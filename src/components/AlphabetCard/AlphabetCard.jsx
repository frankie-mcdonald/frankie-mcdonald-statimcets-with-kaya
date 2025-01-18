import "./AlphabetCard.scss";
import volume from "../../assets/icons/volume-black.png";
import volumewhite from "../../assets/icons/volume.png";

function AlphabetCard({ details }) {
  console.log("Details object:", details);

  const playAudio = (audioUrl) => {
    const fullUrl = audioUrl.startsWith("http")
      ? audioUrl
      : `${import.meta.env.VITE_API_URL}${audioUrl}`;
    const audio = new Audio(fullUrl);
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };
  return (
    <>
      <section className="alphabet-card">
        <h1 className="alphabet-card__heading">{details.letter} </h1>
      </section>
      <h4 className="alphabet-card__body">Sounds like:</h4>
      <section className="alphabet-card__examples">
        <div className="alphabet-card__examples-div">
          <h3
            className="alphabet-card__button"
            onClick={() => playAudio(details.audio1)}
          >
            <img
              src={volumewhite}
              alt="play audio button"
              className="alphabet-card__icon-1"
            />
            {details.example1}
          </h3>
          <h3 className="alphabet-card__body">{details.exampleTranslation1}</h3>
        </div>
        <div className="alphabet-card__examples-div">
          <h3
            className="alphabet-card__button"
            onClick={() => playAudio(details.audio2)}
          >
            <img
              src={volumewhite}
              alt="play audio button"
              className="alphabet-card__icon-1"
            />
            {details.example2}
          </h3>
          <h3 className="alphabet-card__body">{details.exampleTranslation2}</h3>
        </div>
        <div className="alphabet-card__examples-div">
          <h3
            className="alphabet-card__button"
            onClick={() => playAudio(details.audio3)}
          >
            <img
              src={volumewhite}
              alt="play audio button"
              className="alphabet-card__icon-1"
            />
            {details.example3}
          </h3>
          <h3 className="alphabet-card__body">{details.exampleTranslation3}</h3>
        </div>
      </section>
    </>
  );
}

export default AlphabetCard;
