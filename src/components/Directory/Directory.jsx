import "./Directory.scss";
import { NavLink } from "react-router-dom";

function Directory() {
  return (
    <div className="directory">
      <button className="directory__button">Lessons</button>
      <NavLink to="/numbers">
        <button className="directory__button">Numbers</button>
      </NavLink>

      <button className="directory__button">Alphabet</button>
    </div>
  );
}

export default Directory;
