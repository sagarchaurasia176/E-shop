import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import StatusCode from "@/lib/StatusCode";
import CategoryNav from "@/Screens/CategoryNav";
import { ProductApi } from "@/Store/Slice/ProductSlice";
import { addBtn, removeBtn } from "@/Store/Slice/CatalogSlice";
import toast from "react-hot-toast";
// main Product page apply here

const MainProductPage = ({ items }) => {
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(ProductApi());
  }, []);

  const { post: AddCart, Status } = useSelector((state) => state.AddCart);
  const { Carts } = useSelector((state) => state);
  // check the satus code
  if (Status === StatusCode.LOADING) return <Spinner />;
  // error
  if (Status === StatusCode.ERROR) return alert("error in the product page");

  // Main page
  // Remove btn handler
  const RemoveBtnHandler = () => {
    dispatch(removeBtn(items.id));
    toast.success("Item Removed from cart");
  };


  // add cart Btn Hander
  const AddCartBtnHandler = () => {
    dispatch(addBtn(items));
    toast.success("Item Added in Cart");
  };

  return (
    <div>
      <CategoryNav />
      {/* main product page apply here */}
      <div className=" w-full p-1 m-auto rounded-md md:w-2/3 ">
        <div className=" lg:grid p-2  gap-1  lg:grid-cols-3">
          {AddCart.map((details) => (
            <>
              <div key={details.id} className=" ">
                <div
                  key={details.id}
                  className=" cursor-pointer 
                  flex flex-col  items-center justify-between 
                   transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 
                  rounded-lg  outline"
                >
                  <div className="h-[130px]">
                    <img
                      className=" h-full w-full  rounded-t-lg"
                      src={details.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                      {details.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                  </div>
                  {/* price  */}
                  <div className="flex justify-between gap-12 items-center w-full mt-5">
                    <div>
                      <p className="text-green-600 font-semibold">
                        ${details.price}
                      </p>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="flex flex-row gap-7">
                    {Array.isArray(items) &&
                    Carts.some((p) => p?.id === post.id) ? (
                      <button onClick={RemoveBtnHandler}>Remove Item</button>
                    ) : (
                      <button
                        className=" bg-orange-300 rounded-lg p-3"
                        onClick={AddCartBtnHandler}
                      >
                        Add Item
                      </button>
                    )}
                    {/* buy now btn here */}
                    <button className=" bg-slate-400 p-2 rounded-lg">
                      Buy Now
                    </button>
                  </div>






                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;
