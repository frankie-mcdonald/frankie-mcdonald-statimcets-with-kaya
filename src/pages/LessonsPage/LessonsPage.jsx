import GameCard from "../../components/GameCard/GameCard";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./LessonsPage.scss";
import { NavLink } from "react-router-dom";

function LessonsPage() {
  return (
    <>
      <Header />
      <div className="lessons">
        <h3 className="lessons__body">Click here for numbers lesson!</h3>
        <NavLink to="/numbers">
          <h2 className="lessons__button">Click here</h2>
        </NavLink>
        <GameCard />
        <NavBar />
      </div>
    </>
  );
}

export default LessonsPage;
