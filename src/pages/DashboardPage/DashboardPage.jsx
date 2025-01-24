import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Header from "../../components/Header/Header";
import LoginCard from "../../components/LoginCard/LoginCard";
import NavBar from "../../components/NavBar/NavBar";
import "./DashboardPage.scss";
import { useState } from "react";

function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Header />
      <section className="dashboard">
        {isLoggedIn ? <DashboardCard /> : <LoginCard onLogin={handleLogin} />}
      </section>
      <NavBar />
    </>
  );
}

export default DashboardPage;
