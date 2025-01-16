import BackButton from "../BackButton/BackButton";
import "./Header.scss";

function Header() {
  return (
    <nav className="header">
      <BackButton />
      <h1 className="header__title">St̓át̓imcets with Kaya</h1>
    </nav>
  );
}

export default Header;
