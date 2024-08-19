import "./App.css";
// import MainProductPage from "./page/MainProductPage";
// import LocomotiveScroll from "locomotive-scroll";
// const locomotiveScroll = new LocomotiveScroll();
import { Route, Routes } from "react-router-dom";
// import CartCatalog from "./page/CartCatalog";
// import FormUi from "./validation/FormUi";
import FrontPage from "./ui/FrontPage";

// main function apply here
function App() {
  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<FrontPage/>}></Route>
      </Routes>
       
      </div>
    </>
  );
}

export default App;
