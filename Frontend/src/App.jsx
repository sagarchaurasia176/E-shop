import "./App.css";

import { Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import SingupUi from "./validation/SingupUi";
import LoginUi from "./validation/LoginUi";
import { Theme } from "@radix-ui/themes";
import NavbarPage from "./components/Home/NavbarPage";
import MainProductPage from "./page/MainProductPage";
import CartCatalog from "./page/CartCatalog";

// main function apply here
function App() {
  return (
    <>
      <Theme>
        {/* This is fixed */}
        <div className=" ">
          <NavbarPage />
        </div>

        {/* THis is auth page or  I can say the main page */}
        <div>
          <Routes>
            {/* Singup page */}
            <Route path="/" element={<LoginUi />}></Route>

            <Route path="/Products" element={<MainProductPage />}></Route>
            <Route path="/Singup" element={<SingupUi />}></Route>
            {/* <Route path="/product" element={<MainProductPage />}></Route> */}
            <Route path="/Carts" element={<CartCatalog />}></Route>

            {/* login page */}
          </Routes>
        </div>
      </Theme>
    </>
  );
}

export default App;
