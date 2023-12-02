import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterCompany from "./pages/AuthCompany/Register";
import LoginCompany from "./pages/AuthCompany/Login";
import RegisterWorker from "./pages/AuthWorker/Register";
import LoginWorker from "./pages/AuthWorker/Login";
<<<<<<< HEAD
import PageEditCompany from "./pages/PageEditCompany/PageEditCompany";
=======
import HomeLandingPage from "./pages/HomePage/PagesLanding";
>>>>>>> e2e29adefdca527ce57b138f6768bb265ac62e1a

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/login-company" element={<LoginCompany />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/login-worker" element={<LoginWorker />} />
<<<<<<< HEAD
        <Route path="/edit-company" element={<PageEditCompany />} />
=======
        <Route path="/landing-home" element={<HomeLandingPage />} />
>>>>>>> e2e29adefdca527ce57b138f6768bb265ac62e1a
      </Routes>
    </Router>
  );
};

export default App;
