import "./NumbersPage.scss";
import NumbersCard from "../../components/NumbersCard/NumbersCard";

function NumbersPage() {
  return (
    <>
      <section className="numbers-hero">
        <h1 className="numbers-hero__header">Cuystwí xekcál!</h1>
        <h2 className="numbers-hero__subheader">Let's learn numbers!</h2>
      </section>
      <NumbersCard />
    </>
  );
}

export default NumbersPage;
