import "./GameCard.scss";
import salmon from "../../assets/images/salmon.png";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function GameCard() {
  return (
    <>
      <Header />

      <section className="gamecard">
        <h1 className="gamecard__title">How many salmon are there?</h1>
        <img src={salmon} alt="" className="gamecard__image" />
        <ul className="gamecard__list">
          <li className="gamecard__item">tsilkst</li>
          <li className="gamecard__item">q̓em ̓p</li>
          <li className="gamecard__item">pála7</li>
          <li className="gamecard__item">q̓em ̓pálmen</li>
        </ul>
      </section>
      <NavBar />
    </>
  );
}

export default GameCard;
