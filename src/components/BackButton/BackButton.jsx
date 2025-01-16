import "./BackButton.scss";
import Back from "../../assets/icons/previous-green.png";
import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === "/numbers") {
      navigate("/main");
    } else if (location.pathname === "/main") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <img
      onClick={handleBackClick}
      className="back-icon"
      src={Back}
      alt="Back button"
    />
  );
}

export default BackButton;
