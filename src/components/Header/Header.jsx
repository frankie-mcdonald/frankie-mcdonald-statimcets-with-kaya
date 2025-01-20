import BackButton from "../BackButton/BackButton";
import "./Header.scss";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="header">
      <BackButton />
      <NavLink to="/">
        <h1 className="header__title">St̓át̓imcets with Kaya</h1>
      </NavLink>
    </nav>
  );
}

export default Header;
