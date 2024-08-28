import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import StatusCode from "@/lib/StatusCode";
// import Spinner from "./Spinner";
import UserCarts from "./UserCarts";
import { useEffect, useState } from "react";

const CartCatalog = () => {
  const { cartsArray } = useSelector((state) => state.Carts);
  const [total, setTotal] = useState(0);
  // data fetched
  useEffect(() => {
    setTotal(cartsArray.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartsArray]);

  return (
    <>
      <div>
        <div className="">
          {/* cart page  */}
          <div className=" w-full overflow-hidden">
            {cartsArray && cartsArray.length > 0 ? (
              <>
                <div className=" grid lg:grid-cols-2 p-3  sm:grid-cols-2 gap-3">
                  {cartsArray &&
                    cartsArray.map((items) => {
                      return (
                        <UserCarts key={items.id} items={items} total={total} />
                      );
                    })}
                </div>
                <div>
                  <div className="  bg-slate-800 text-white">
                    <div className=" p-3 sm:block py-3">
                      <div className="  text-teal-400 font-bold ">
                        <h3>Your Cart</h3>
                      </div>
                      <div className="  text-gray-50   font-bold text-3xl">
                        <h1>Summary</h1>
                      </div>
                      <br></br>
                      <div className="   font-bold">
                        <span className="  text-orange-600 font-bold">
                          Total Items : {cartsArray.length}
                        </span>
                      </div>
                      <div>
                        <span>Total Amount : ${total}</span>
                      </div>
                      <div>
                        {/* Payment modal on ❌ */}
                        <NavLink to="/">
                          <div
                            className=" flex justify-center items-center 
                         w-44 rounded-lg m-auto cursor-pointer 
                          transition-all duration-100
                           hover:bg-slate-300
                        bg-green-400 outline p-3"
                          >
                            <button className=" w-44">CheckOut</button>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className=" w-screen h-screen  text-white flex justify-center items-center 
                 bg-slate-900  "
                >
                  <div className="">
                    <h1
                      className="  
                       font-extralight "
                    >
                      Cart is Empty
                      <span
                        className="  
                      text-4xl"
                      >
                        😔
                      </span>
                      Add Something
                    </h1>
                    <br />
                  </div>

                  <div>
                    <NavLink to="/Products">
                      <div
                        className=" flex justify-center items-center 
                         w-44 rounded-lg m-auto cursor-pointer 
                          transition-all duration-100
                           hover:bg-slate-300
                        bg-green-400 outline p-3"
                      >
                        <button className=" w-44">Shop Now</button>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCatalog;
