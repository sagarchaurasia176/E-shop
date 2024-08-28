import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import UiProductPage from "./UiProductPage";
import { setLoading } from "@/Store/Slice/CatalogSlice";
import Spinner from "./Spinner";


// main Product page apply here
const MainProductPage = () => {
  const [productApi, setProductApi] = useState([]);
  const dispatch = useDispatch();
  const apiUrl = "https://fakestoreapi.com/products";
  //loading
  const {loading}  = useSelector((state)=>state.Carts);

  // useEffect() apply here -
  const apiCalling = async () => {
    try {
      setLoading(true);
      const apis = await axios.get(apiUrl);
      setProductApi(apis.data);
      setLoading(false);
    } catch (er) {
      console.log("error while fetching api");
      console.error(er);
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

  return (
    <>
      <div className=" ">
        <div>
          {loading ? (<Spinner/>) : productApi && productApi.length > 0 ? (
            <>
              <div className=" grid  sm:grid-cols-1 ml-[2rem] md:grid-cols-3 gap-7 p-3 max-w-6xl m-auto   ">
                {productApi.map((val) => {
                  return <UiProductPage key={val.id} items={val} />;
                })}
              </div>
            </>
          ) : (
            <>
              <Spinner/>

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainProductPage;
