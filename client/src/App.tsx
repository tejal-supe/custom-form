import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./common/Navbar.tsx";
import "./App.css";
import Routing from "./Routing.tsx";
import { loggedIn } from "./api/userApi.ts";
import { useAuthStore } from "./store/authStore.ts";
import { ThemeProvider } from "./components/theme.provider.tsx";

function App() {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loggedIn();
      if (data) {
        useAuthStore.getState().login(data);
      }
    };
    fetchData();
  }, [isAuthenticated]);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
