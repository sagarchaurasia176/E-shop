import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import StatusCode from "@/lib/StatusCode";
// import Spinner from "./Spinner";
import UserCarts from "./UserCarts";
import { useEffect, useState } from "react";

const CartCatalog = () => {
  const Carts = useSelector((state) => state.Carts);
  const [total, setTotal] = useState(0);
  // data fetched
  useEffect(() => {
    setTotal(Carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [Carts]);

  return (
    <>
      <div>
        <div className=" flex flex-row gap-16 max-w-6xl flex-wrap space-x-36">
          {/* cart page  */}
          <div className=" lg:w-[70%]">
            {Carts.length > 0 ? (
              <>
                <div>
                  {Carts &&
                    Carts.map((items) => {
                      return (
                        <UserCarts key={items.id} items={items} total={total} />
                      );
                    })}
                </div>
              </>
            ) : (
              <>
                <div className="  text-center  p-4 h-screen mr-20 ">
                  <h1
                    className=" lg:text-2xl text-center 
                     sm:text-2xl  font-extralight "
                  >
                    Cart is Empty
                    <span
                      className="  
                      text-3xl"
                    >
                      😔
                    </span>
                    Add Something
                  </h1>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCatalog;
