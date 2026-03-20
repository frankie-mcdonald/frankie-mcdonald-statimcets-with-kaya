import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Header from "../../components/Header/Header";
import LoginCard from "../../components/LoginCard/LoginCard";
import NavBar from "../../components/NavBar/NavBar";
import "./DashboardPage.scss";
import { useState } from "react";

function DashboardPage() {
  return (
    <section className="dashboard">
      <Header />
      <DashboardCard />
      <NavBar />
    </section>
  );
}

export default DashboardPage;
