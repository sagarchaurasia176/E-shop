import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const AddCart = () => {
  const Carts = useSelector((states) => states.Carts);
  return (
    <div>
      {/* ciShoping Carrts */}
      {Carts.length > 0 && (
        <sub
          className="  text-cyan-200 bg-slate-400  font-semibold text-1xl rounded-lg
              p-1 w-32  animate-bounce "
        >
          {Carts.length}
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
