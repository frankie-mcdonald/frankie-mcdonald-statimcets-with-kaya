import "./WordCard.scss";
import volume from "../../assets/icons/volume-black.png";
import word from "../../assets/audio/thankyou.mp3";
function WordCard() {
  const playAudio = () => {
    const audio = new Audio(word);
    audio.play();
  };
  return (
    <section className="word">
      <h1 className="word__heading">Word of the day!</h1>
      <div className="word__button" onClick={playAudio}>
        <img src={volume} className="word__icon" />
        Kúkwstumckacw
      </div>
      <h3 className="word__body">Thank you</h3>
    </section>
  );
}

export default WordCard;
