import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import StatusCode from "@/lib/StatusCode";
// import Spinner from "./Spinner";
import UserCarts from "./UserCarts";
import { useEffect, useState } from "react";

const CartCatalog = () => {
  // 👉Might be not work let see
  const Carts = useSelector((state) => state.Carts.emptyCart);

  console.log("carts values ", Carts);
  const [total, setTotal] = useState(0);

  // useEffect apply here so we get this !
  useEffect(() => {
    setTotal(
      Carts.reduce((previousValue, currentValue) => {
        previousValue + currentValue.price;
      }, 0)
    );
  }, [Carts]);

  return (
    <>
      <div>
        <div className="">
          <div className="">
            {/* cart page  */}
            <div className="">
              {Carts && Carts.length > 0 ? (
                <>
                  <div>
                    {Carts &&
                      Carts.map((items) => {
                        return (
                          <UserCarts
                            key={items.id}
                            items={items}
                            amount={total}
                          />
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
      </div>
    </>
  );
};

export default CartCatalog;
