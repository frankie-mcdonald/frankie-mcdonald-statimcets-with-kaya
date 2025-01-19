import "./NavBar.scss";
import KayaLogo from "../KayaLogo/KayaLogo";
import abcIcon from "../../assets/icons/abc-icon-white.png";
import numberIcon from "../../assets/icons/numbers-icon-white.png";
import lessonsIcon from "../../assets/icons/lessons.png";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/alphabet">
        <img className="navbar__icon" src={abcIcon} alt="Abc's icon" />
      </NavLink>
      <NavLink to="/numbers">
        <img className="navbar__icon" src={numberIcon} alt="Numbers icon" />
      </NavLink>
      <NavLink to="/lessons">
        <img className="navbar__icon" src={lessonsIcon} alt="Lessons icon" />
      </NavLink>
      <div className="navbar__login">
        <p className="navbar__body">Login</p>
        <KayaLogo />
      </div>
    </nav>
  );
}

export default NavBar;
