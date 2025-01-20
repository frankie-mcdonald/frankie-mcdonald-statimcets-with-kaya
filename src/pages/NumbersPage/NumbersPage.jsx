import "./NumbersPage.scss";
import NumbersCard from "../../components/NumbersCard/NumbersCard";
import NumbersVideo from "../../assets/video/Kaya-numbers2025.mp4";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";

function NumbersPage() {
  return (
    <>
      <Header />
      <div className="numbers">
        <section className="numbers__hero">
          <h1 className="numbers__hero-header">Cuystwí xekcál!</h1>
          <h2 className="numbers__hero-subheader">Let's learn numbers!</h2>
        </section>
        <NumbersCard />
        <h3 className="numbers__title">All together now!</h3>
        <video className="numbers__video" controls>
          <source src={NumbersVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="numbers__body">Click here to test your knowledge!!</h3>
        <NavLink to="/lessons">
          <h2 className="numbers__button">Quiz</h2>
        </NavLink>
      </div>
      <NavBar />
    </>
  );
}

export default NumbersPage;
