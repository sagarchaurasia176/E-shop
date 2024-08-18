import "./App.css";
import Navbar from "./Screens/Navbar";
import MainProductPage from "./page/MainProductPage";
import LocomotiveScroll from "locomotive-scroll";
const locomotiveScroll = new LocomotiveScroll();
import { Route, Routes } from "react-router-dom";
import CartCatalog from "./page/CartCatalog";


// main function apply here
function App() {
  return (
    <>
      <div>
        <div className="h-screen">
          <div className="">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<MainProductPage />}></Route>
            <Route path="/cartPage" element={<CartCatalog />}></Route>
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
