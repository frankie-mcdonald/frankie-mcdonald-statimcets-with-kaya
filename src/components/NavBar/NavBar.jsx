import "./NavBar.scss";
import KayaLogo from "../KayaLogo/KayaLogo";

function NavBar() {
  return (
    <ul className="navbar">
      {/* <li className="navbar__item">Vocabulary</li>
      <li className="navbar__item">Games</li> */}
      <li className="navbar__item">Login</li>
      <KayaLogo />
    </ul>
  );
}

export default NavBar;
