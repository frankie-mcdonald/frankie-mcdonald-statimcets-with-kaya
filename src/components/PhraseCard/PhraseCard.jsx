import "./PhraseCard.scss";
import volume from "../../assets/icons/volume-black.png";
import phrase from "../../assets/audio/whats-your-name.mp3";

function PhraseCard() {
  const playAudio = () => {
    const audio = new Audio(phrase);
    audio.play();
  };
  return (
    <section className="phrase">
      <h1 className="phrase__heading">Phrase of the day!</h1>
      <div className="phrase__button" onClick={playAudio}>
        <img src={volume} className="word__icon" />
        Stam ̓ ku skwátsitsu?
      </div>
      <h3 className="phrase__body">What’s your name? </h3>
    </section>
  );
}

export default PhraseCard;
