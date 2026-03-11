import "./AnimalsPage.scss";
import AnimalsCard from "../../components/AnimalsCard/AnimalsCard";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";

function AnimalsPage() {
  return (
    <>
      <Header />
      <div className="animals">
        <section className="animals__hero">
          <h1 className="animals__hero-header">Cuystwí xekcál!</h1>
          <h2 className="animals__hero-subheader">Let's learn animals!</h2>
        </section>
        <AnimalsCard />
        <h3 className="animals__body">Click here to test your knowledge!!</h3>
        <NavLink to="/lessons">
          <h2 className="animals__button">Quiz</h2>
        </NavLink>
      </div>
      <NavBar />
    </>
  );
}

export default AnimalsPage;
