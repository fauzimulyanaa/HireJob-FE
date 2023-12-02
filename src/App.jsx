// <<<<<<< HEAD
// export default function App() {
//   return <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>;
// }
// =======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterCompany from "./pages/AuthCompany/Register";
import LoginCompany from "./pages/AuthCompany/Login";
import RegisterWorker from "./pages/AuthWorker/Register";
import LoginWorker from "./pages/AuthWorker/Login";
import PageEditCompany from "./pages/PageEditCompany/PageEditCompany";
import HomeLandingPage from "./pages/HomePage/PagesLanding";
import PageEditWorker from "./pages/PageEditWorker/PageEditWorker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/login-company" element={<LoginCompany />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/login-worker" element={<LoginWorker />} />
        <Route path="/edit-company" element={<PageEditCompany />} />
        <Route path="/edit-worker" element={<PageEditWorker />} />
        <Route path="/landing-home" element={<HomeLandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
// >>>>>>> 21a4203ca5f5e17657d2232625f39e3146457c34
