import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NumbersPage from "./pages/NumbersPage/NumbersPage";
import MainPage from "./pages/MainPage/MainPage";
import LessonsPage from "./pages/LessonsPage/LessonsPage";
import AlphabetPage from "./pages/AlphabetPage/AlphabetPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AnimalsPage from "./pages/AnimalsPage/AnimalsPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/numbers" element={<NumbersPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/alphabet" element={<AlphabetPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
