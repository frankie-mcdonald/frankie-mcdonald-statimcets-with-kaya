import "./MainPage.scss";
import Header from "../../components/Header/Header";
import Directory from "../../components/Directory/Directory";
import PhraseCard from "../../components/PhraseCard/PhraseCard";
import WordCard from "../../components/WordCard/WordCard";
import NavBar from "../../components/NavBar/NavBar";

function MainPage() {
  return (
    <>
      {" "}
      <Header />
      <section className="main">
        <figure className="main__hero"></figure>
        <WordCard />
        <PhraseCard />
        <Directory />
        <NavBar />
      </section>
    </>
  );
}

export default MainPage;
