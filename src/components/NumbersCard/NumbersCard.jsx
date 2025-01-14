import "./NumbersCard.scss";
import Kaya1 from "../../assets/images/kaya-1.jpg";

function NumbersCard() {
  return (
    <>
      <figure className="number-card">
        <img className="number-card__image" src={Kaya1} alt="" />
      </figure>
      ;
    </>
  );
}

export default NumbersCard;
