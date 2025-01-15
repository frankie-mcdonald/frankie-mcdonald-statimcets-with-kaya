import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NumbersPage from "./pages/NumbersPage/NumbersPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/numbers" element={<NumbersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
