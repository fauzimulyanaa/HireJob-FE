import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterCompany from "./pages/AuthCompany/Register";
import LoginCompany from "./pages/AuthCompany/Login";
import RegisterWorker from "./pages/AuthWorker/Register";
import LoginWorker from "./pages/AuthWorker/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/login-company" element={<LoginCompany />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/login-worker" element={<LoginWorker />} />
      </Routes>
    </Router>
  );
};

export default App;
