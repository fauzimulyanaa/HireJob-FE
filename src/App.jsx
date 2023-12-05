import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RegisterCompany from "./pages/AuthCompany/Register";
import LoginCompany from "./pages/AuthCompany/Login";
import RegisterWorker from "./pages/AuthWorker/Register";
import LoginWorker from "./pages/AuthWorker/Login";
import PageEditCompany from "./pages/PageEditCompany/PageEditCompany";
import HomeLandingPage from "./pages/HomePage/PagesLanding";
import PageEditWorker from "./pages/PageEditWorker/PageEditWorker";
<<<<<<< HEAD
import PagesChat from "./pages/ChatTable/PagesChat"
=======
import ProfileWorker from "./pages/ProfileWorker/Profile";
import PageResetPassword from "./pages/ResetPassword/PageResetPassword";
import PageSendOtp from "./pages/ResetPassword/PageSendOtp";
import PageNewPassword from "./pages/ResetPassword/PageNewPassword";
import PageHomeUtama from "./pages/HomeUtama/PageHomeUtama";
>>>>>>> 1566146b75914e55a32b9711f4564bf45297bb79

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/login-company" element={<LoginCompany />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/login-worker" element={<LoginWorker />} />
        <Route path="/edit-company" element={<PageEditCompany />} />
        <Route path="/edit-worker" element={<PageEditWorker />} />
        <Route path="/landing-home" element={<HomeLandingPage />} />
<<<<<<< HEAD
        <Route path="/profile/:id" element={<ProfileWorker />} />
=======
<<<<<<< HEAD
        <Route path="/chat-page" element={<PagesChat />} />
=======
        <Route path="/profile" element={<ProfileWorker />} />
>>>>>>> 25a1cc184d81e35391c3ac3c9649b8f3a4b4ad8e
        <Route path="/reset-password" element={<PageResetPassword />} />
        <Route path="/send-otp" element={<PageSendOtp />} />
        <Route path="/new-password" element={<PageNewPassword />} />
        <Route path="/home" element={<PageHomeUtama />} />
>>>>>>> 1566146b75914e55a32b9711f4564bf45297bb79
      </Routes>
    </Router>
  );
};

export default App;
