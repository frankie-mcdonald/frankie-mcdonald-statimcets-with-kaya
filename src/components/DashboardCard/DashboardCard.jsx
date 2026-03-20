import "./DashboardCard.scss";
import { NavLink } from "react-router-dom";

function DashboardCard() {
  return (
    <section className="dashboardcard">
      <ul className="dashboardcard__list">
        <h1 className="dashboardcard__title"> Dashboard</h1>
        <NavLink to="/alphabet" className="dashboardcard__link">
          <li className="dashboardcard__items">Alphabet</li>
        </NavLink>
        <NavLink to="/numbers" className="dashboardcard__link">
          <li className="dashboardcard__items">Numbers</li>
        </NavLink>
        <NavLink to="/animals" className="dashboardcard__link">
          <li className="dashboardcard__items">Animals</li>
        </NavLink>

        <li className="dashboardcard__items">Introduction</li>
        <li className="dashboardcard__items">Colors</li>
        <li className="dashboardcard__items">Months</li>
        <li className="dashboardcard__items">Weekdays</li>
        <li className="dashboardcard__items">Common phrases</li>
        <li className="dashboardcard__items">Family members</li>
        <li className="dashboardcard__items">Body Parts</li>
      </ul>
    </section>
  );
}

export default DashboardCard;
