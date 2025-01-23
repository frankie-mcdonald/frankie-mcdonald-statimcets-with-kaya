import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Header from "../../components/Header/Header";
import LoginCard from "../../components/LoginCard/LoginCard";
import NavBar from "../../components/NavBar/NavBar";
import "./DashboardPage.scss";

function DashboardPage() {
  return (
    <>
      <Header />
      <section className="dashboard">
        {/* <LoginCard /> */}
        <DashboardCard />
      </section>
      <NavBar />
    </>
  );
}

export default DashboardPage;
