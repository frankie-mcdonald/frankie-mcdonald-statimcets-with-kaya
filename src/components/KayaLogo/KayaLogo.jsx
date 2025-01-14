import "./KayaLogo.scss";
import Kaya from "../../assets/images/kaya.png";

function KayaLogo() {
  return (
    <figure className="logo">
      <img className="logo__img" src={Kaya} alt="Kaya Waving" />
    </figure>
  );
}

export default KayaLogo;
