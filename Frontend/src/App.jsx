import "./App.css";
import { Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import SingupUi from "./validation/SingupUi";
import LoginUi from "./validation/LoginUi";
import { Theme } from "@radix-ui/themes";
import NavbarPage from "./components/Home/NavbarPage";
import MainProductPage from "./page/MainProductPage";
import CartCatalog from "./page/CartCatalog";
import OtpVerify from "./verifyPages/OtpVerify";
import ResetPassword from "./verifyPages/ResetPassword";
import ChangePassword from "./verifyPages/ChangePassword";

// main function apply here
function App() {
  return (
    <>
      <Theme>
        {/* This is fixed */}
        <div className="">
          <NavbarPage />
        </div>

        {/* THis is auth page or  I can say the main page */}
        <div className=" w-full overflow-hidden">
          <Routes>
            {/* Singup page */}
            <Route path="/" element={<LoginUi />}></Route>
            <Route path="/Singup" element={<SingupUi />}></Route>
            <Route path="/Products" element={<MainProductPage />}></Route>
            {/* <Route path="/product" element={<MainProductPage />}></Route> */}
            <Route path="/Carts" element={<CartCatalog />}></Route>
            <Route path="/OtpVerify" element={<OtpVerify />}></Route>
            <Route path="/ResetPassword" element={<ResetPassword />}></Route>

            {/* Here password the id on the basis of its worked */}
            <Route
              path="/update-password/:id"
              element={<ChangePassword />}
            ></Route>
          </Routes>
        </div>
      </Theme>
    </>
  );
}

export default App;

// pending task
// change password fields
