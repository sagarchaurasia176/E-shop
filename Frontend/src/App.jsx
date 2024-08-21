import "./App.css";

import { Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import SingupUi from "./validation/SingupUi";
import LoginUi from "./validation/LoginUi";
import { Theme } from "@radix-ui/themes";
import NavbarPage from "./components/Home/NavbarPage";
import MainProductPage from "./page/MainProductPage";

// main function apply here
function App() {
  return (
    <>
      <Theme>
        {/* This is fixed */}
        <div className=" bg-slate-900 ">
          <NavbarPage />
        </div>

        {/* THis is auth page or  I can say the main page */}
        <div>
          <Routes>
            {/* Singup page */}
            <Route path="/" element={<LoginUi />}></Route>
            <Route path="/Singup" element={<SingupUi />}></Route>
            <Route path="/product" element={<MainProductPage />}></Route>
            {/* login page */}
          </Routes>
        </div>
      </Theme>
    </>
  );
}

export default App;
