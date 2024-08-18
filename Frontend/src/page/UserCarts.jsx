import React from "react";
// import { MdDeleteOutline } from "react-icons/md";
const UserCarts = ({ items }) => {
  return (
    <div>
      <div key={items.id} className=" ">
        <div
          className=" cursor-pointer    sm:w-80  
                  flex flex-col  items-center  justify-evenly
                   transition duration-300 ease-in gap-3 p-4 mt-10 ml-1 
                  rounded-lg  outline"
        >
            <div>
              {items.title}
            </div>
          <div className="h-[130px]">
            <img
              className=" h-full w-full  rounded-t-lg"
              src={items.image}
              alt=""
            />
          </div>
          <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
              {/* {items.description.split(" ").slice(0, 10).join(" ") + "..."} */}
            </p>
          </div>
          {/* price  */}
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <div>
              <p className="text-green-600 font-semibold">${items.price}</p>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row   gap-7"></div>
        </div>
      </div>
    </div>
  );
};

export default UserCarts;
