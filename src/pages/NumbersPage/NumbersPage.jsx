import "./NumbersPage.scss";
import NumbersCard from "../../components/NumbersCard/NumbersCard";
import NumbersVideo from "../../assets/video/statimcets-numbers.mp4";
function NumbersPage() {
  return (
    <div className="numbers">
      <section className="numbers-hero">
        <h1 className="numbers-hero__header">Cuystwí xekcál!</h1>
        <h2 className="numbers-hero__subheader">Let's learn numbers!</h2>
      </section>
      <NumbersCard />

      <video className="numbers__video" autoPlay controls>
        <source src={NumbersVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default NumbersPage;
