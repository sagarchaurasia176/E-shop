import React from "react";
import CategoryName from "../api/CategoryAPI";
const CategoryNav = () => {
  return (
    <div>
      <div className=" p-3 transition-all duration-100   bg-slate-300   m-auto">
        <div className=" text-center  items-center  ">
          <div className=" mb-3 ">
          <span className=" text-orange-600 text-1xl ">All Categories</span>
          </div>
          <ul className="  cursor-pointer sm:space-x-12">
            {CategoryName.map((category) => (
              <span key={category.id} className=" sm:hover:bg-none lg:hover:bg-orange-200 rounded-md hover:transition-all p-2  hover:text-black  text-black">
                {category.productType}
              </span>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
