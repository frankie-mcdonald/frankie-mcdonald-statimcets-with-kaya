import "./DashboardCard.scss";
import { NavLink } from "react-router-dom";

function DashboardCard() {
  return (
    <section className="dashboardcard">
      <ul className="dashboardcard__list">
        <h1 className="dashboardcard__title"> Dashboard</h1>
        <NavLink to="/numbers" className="dashboardcard__link">
          <li className="dashboardcard__items">
            Numbers{" "}
            <button className="dashboardcard__button dashboardcard__button-special">
              Passed
            </button>
          </li>
        </NavLink>
        <li className="dashboardcard__items">
          Animals
          <button className="dashboardcard__button dashboardcard__button-special">
            Passed
          </button>
        </li>
        <li className="dashboardcard__items">
          Introduction<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Colors<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Months<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Weekdays<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Common phrases<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Family members<button className="dashboardcard__button">Quiz</button>
        </li>
        <li className="dashboardcard__items">
          Body Parts<button className="dashboardcard__button">Quiz</button>
        </li>
      </ul>
    </section>
  );
}

export default DashboardCard;
