import "./NavBar.scss";
import KayaLogo from "../KayaLogo/KayaLogo";
import abcIcon from "../../assets/icons/abc-icon-white.png";
import numberIcon from "../../assets/icons/numbers-icon-white.png";
import homeIcon from "../../assets/icons/home.png";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="navbar__icon" src={homeIcon} alt="home icon" />
      </NavLink>
      <NavLink to="/alphabet">
        <img className="navbar__icon" src={abcIcon} alt="abc icon" />
      </NavLink>
      <NavLink to="/numbers">
        <img className="navbar__icon" src={numberIcon} alt="numbers icon" />
      </NavLink>
      <div className="navbar__login">
        {" "}
        <p className="navbar__body">Login</p>
        <KayaLogo />
      </div>
    </nav>
  );
}

export default NavBar;
