import { Route, Routes } from "react-router-dom";

import Register from "./pages/register";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login";
import { SidebarDemo } from "./pages/dashboard";
import Profile from "./pages/dashboard/profile";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<SidebarDemo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Routing;
