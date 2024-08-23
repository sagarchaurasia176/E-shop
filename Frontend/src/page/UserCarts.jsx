import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";
const UserCarts = ({ items, amount }) => {

  useEffect(() => {
    totalAmountIdentifer();
  }, [total]);
  return (
    <div>
      <div className=" grid grid-cols-2">
        {/* main item page here */}
        <div key={items.id} className=" ">
          <div
            className=" cursor-pointer    sm:w-80  
                  flex flex-col  items-center  justify-evenly
                   transition duration-300 ease-in gap-3 p-4 mt-10 ml-1 
                  rounded-lg  outline"
          >
            <div>
              <span>{items.title}</span>
            </div>
            <div className="h-[130px]">
              <img
                className=" h-full w-full  rounded-t-lg"
                src={items.image}
                alt=""
              />
            </div>

            {/* price  */}
            <div className="flex justify-between gap-12 items-center w-full mt-5">
              <div>
                <p className="text-green-600 font-semibold">${items.price}</p>
              </div>
            </div>

            <div>
              <button>
                <MdDeleteOutline />
              </button>
            </div>
            {/* buttons */}
          </div>
        </div>

        {/* next main page  */}
        <div className=" bg-red-200">
          <div>
            <h3>Your Cart</h3>
          </div>
          <div>
            <h1>Summary</h1>
          </div>
          <div>
            <span>Total Items : {items.length}</span>
          </div>
          <div>
            <span>Total Amount : ₹{amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCarts;
