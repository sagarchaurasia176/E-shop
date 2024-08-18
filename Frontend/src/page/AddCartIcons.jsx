import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const AddCart = () => {
  const { Carts } = useSelector((states) => states.Carts);
  return (
    <div>
      {/* ciShopping Carrts */}
       {
           Carts && Carts.length > 0(
            <sub
              className=" text-white  font-semibold text-1xl rounded-full 
             p-2 ml-2  animate-bounce "
            >{Carts.length}</sub>          
    )}
      {/* shooping cart apply here */}
      <CiShoppingCart
        className=" size-8 cursor-pointer
       text-red-500"
      />
    </div>
  );
};

export default AddCart;
