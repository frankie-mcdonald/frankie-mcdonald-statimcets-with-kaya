import GameCard from "../../components/GameCard/GameCard";
import Header from "../../components/Header/Header";
import "./LessonsPage.scss";
import { NavLink } from "react-router-dom";

function LessonsPage() {
  return (
    <>
      <Header />
      <div className="lessons">
        <h3 className="lessons__body">
          Click here to learn numbers before taking quiz!
        </h3>
        <NavLink to="/numbers">
          <h2 className="lessons__button">Click here</h2>
        </NavLink>

        <GameCard />
      </div>
    </>
  );
}

export default LessonsPage;
