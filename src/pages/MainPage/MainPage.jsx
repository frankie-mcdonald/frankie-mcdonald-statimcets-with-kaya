import Directory from "../../components/Directory/Directory";
import PhraseCard from "../../components/PhraseCard/PhraseCard";
import WordCard from "../../components/WordCard/WordCard";
import "./MainPage.scss";

function MainPage() {
  return (
    <div>
      <figure className="main__hero"></figure>
      <Directory />
      <WordCard />
      <PhraseCard />
    </div>
  );
}

export default MainPage;
