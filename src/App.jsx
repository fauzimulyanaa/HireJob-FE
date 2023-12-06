import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterCompany from "./pages/AuthCompany/Register";
import LoginCompany from "./pages/AuthCompany/Login";
import RegisterWorker from "./pages/AuthWorker/Register";
import LoginWorker from "./pages/AuthWorker/Login";
import PageEditCompany from "./pages/PageEditCompany/PageEditCompany";
import HomeLandingPage from "./pages/HomePage/PagesLanding";
import PageEditWorker from "./pages/PageEditWorker/PageEditWorker";
import PagesChat from "./pages/ChatTable/PagesChat"
import ProfileWorker from "./pages/ProfileWorker/Profile";
import PageResetPassword from "./pages/ResetPassword/PageResetPassword";
import PageSendOtp from "./pages/ResetPassword/PageSendOtp";
import PageNewPassword from "./pages/ResetPassword/PageNewPassword";
import PageHomeUtama from "./pages/HomeUtama/PageHomeUtama";
import HirePageWork from "./pages/HiringPage/PageHiring";

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
        <Route path="/profile/:id" element={<ProfileWorker />} />
        <Route path="/chat-page" element={<PagesChat />} />
        <Route path="/profile" element={<ProfileWorker />} />
        <Route path="/profile/:id" element={<ProfileWorker />} />
        <Route path="/chat-page" element={<PagesChat />} />
        <Route path="/profile" element={<ProfileWorker />} />
        <Route path="/reset-password" element={<PageResetPassword />} />
        <Route path="/send-otp" element={<PageSendOtp />} />
        <Route path="/new-password" element={<PageNewPassword />} />
        <Route path="/hires-pages" element={<HirePageWork />} />
        <Route path="/home" element={<PageHomeUtama />} />
      </Routes>
    </Router>
  );
};

export default App;
