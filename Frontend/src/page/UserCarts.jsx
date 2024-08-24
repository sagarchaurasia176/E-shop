import { removeBtn } from "@/Store/Slice/CatalogSlice";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { MdDeleteOutline } from "react-icons/md";
const UserCarts = ({ items, total }) => {
  // useEffect(() => {
  //   totalAmountIdentifer();
  // }, [total]);
const Carts = useSelector((val)=>val.Carts);
  const dispatch = useDispatch();
  const removedData = () => {
    dispatch(removeBtn(items.id));
  };

  return (
    <div>
      <div className=" ">
        {/* main item page here */}
        <div key={items.id} className=" ">
          <div
            className=" cursor-pointer    sm:w-80  
                  flex flex-col  justify-center items-center
                   transition duration-300 ease-in gap-3 p-4 mt-4 ml-1 
                  rounded-lg  outline"
          >
            <div>
              <span className=" text-black font-bold">{items.title}</span>
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
                <p className=" text-red-950 font-medium">${items.price}</p>
              </div>
            </div>

            <div className="  items-end">
              <button
                onClick={() => removedData()}
                className="  bg-black text-white p-1"
              >
                <MdDeleteOutline />
              </button>
            </div>
            {/* buttons */}
          </div>
        </div>

        {/* next main page  */}
     
      </div>
    </div>
  );
};

export default UserCarts;
