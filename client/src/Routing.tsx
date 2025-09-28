import { Route, Routes } from "react-router-dom";

import Register from "./pages/register";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;
