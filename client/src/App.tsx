import { BrowserRouter } from "react-router-dom";

import Navbar from "./common/Navbar.tsx";
import "./App.css";
import Routing from "./Routing.tsx";

function App() {
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
