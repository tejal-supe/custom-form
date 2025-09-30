import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./common/Navbar.tsx";
import "./App.css";
import Routing from "./Routing.tsx";
import { loggedIn } from "./api/userApi.ts";
import { useAuthStore } from "./store/authStore.ts";

function App() {
    const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loggedIn();
    console.log(data);
    
      if (data) {
        useAuthStore.getState().login(data);
      }
    };
    fetchData();
  }, [isAuthenticated]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
