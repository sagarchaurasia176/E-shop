import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import StatusCode from "@/lib/StatusCode";
// import Spinner from "./Spinner";
import UserCarts from "./UserCarts";

const CartCatalog = () => {
  const { cartPost: Carts } = useSelector((state) => state.Carts);

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
                        return <UserCarts key={items.id} items={items} />;
                      })}
                  </div>
                </>
              ) : (
                // This is false
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
                    <NavLink to="/">
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
            {/* summary start */}
          </div>
          {/* last vreak points here */}
        </div>
      </div>
    </>
  );
};

export default CartCatalog;
