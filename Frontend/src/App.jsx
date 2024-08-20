import "./App.css";

import { Route, Routes } from "react-router-dom";

import FrontPage from "./ui/AuthPage";
import SingupUi from "./validation/SingupUi";
import LoginUi from "./validation/LoginUi";
import Homapage from "./components/Home/Homapage";

// main function apply here
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homapage/>}></Route>
          {/* Singup page */}
          <Route path="/Singup" element={<SingupUi />}></Route>
          {/* login page */}
          <Route path="/Login" element={<LoginUi />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
