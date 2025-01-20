import "./MainPage.scss";
import Header from "../../components/Header/Header";
import WordCard from "../../components/WordCard/WordCard";
import NavBar from "../../components/NavBar/NavBar";

function MainPage() {
  return (
    <>
      <Header />
      <section className="main">
        <figure className="main__hero"></figure>
        <WordCard />
        <NavBar />
      </section>
    </>
  );
}

export default MainPage;
