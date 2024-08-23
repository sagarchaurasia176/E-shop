import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const AddCart = () => {
  const { emptyCart } = useSelector((states) => states);
  return (
    <div>
      {/* ciShoping Carrts */}
      {emptyCart&&
        emptyCart.length > 0 
        (
            <sub
              className="  text-cyan-200  font-semibold text-1xl rounded-full 
             p-2 ml-2  animate-bounce "
            >
              {emptyCart.length}
            </sub>
          )}
      {/* shooping cart apply here */}
      <CiShoppingCart
        className=" size-8 cursor-pointer
       text-white"
      />
    </div>
  );
};

export default AddCart;
