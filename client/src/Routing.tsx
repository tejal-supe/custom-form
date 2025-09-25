import { Route, Routes } from "react-router-dom";

import Register from "./pages/register";
import LandingPage from "./pages/landing/LandingPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Routing;
