import { addBtn, removeBtn } from "@/Store/Slice/CatalogSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UiProductPage = ({ items }) => {
  const [readMore, setMore] = useState(false);
  const toggle = () => setMore(!readMore);
  const dispatch = useDispatch();

  const Carts = useSelector((state) => state.Carts);

  // AddItems
  const addItem = () => {
    dispatch(addBtn(items));
    toast.success("Item added");
  };

  const removeItem = () => {
    dispatch(removeBtn(items.id));
    toast.error("Item removed");
  };

  return (
    <div className="   ">
      <div className=" bg-white shadow-md 
      w-[18rem] h-[23rem] md:hover:scale-110  transition-all duration-500   
      cursor-pointer p-5 sm:items-center rounded-lg ">
        <div>
          <span className="font-semibold">
            {items.title.slice(0, 30)}
          </span>
        </div>
        {/* Image */}
        <div className="  ml-[5rem]  w-[6rem]">
          <img src={items.image} alt={items.title} />
        </div>
        {/* Description */}
        <div className="font-sans">
          <span>
            {readMore ? items.description : items.description.slice(0, 60)}
          </span>
        
        </div>
        <br />
        {/* Price and Button */}
        <div
          className=" flex  justify-between  text-green-950 p-4 
          text-center rounded-md"
        >
          <span className="text-red-600">${items.price}</span>

          {/* Add the Button logic here */}
          <div >
            {Carts.some((p) => p.id === items.id) ? (
              <button
                className="bg-slate-600 rounded-md text-white p-2"
                onClick={removeItem}
              >
                Remove Cart
              </button>
            ) : (
              <button className="bg-slate-600 rounded-md text-white p-2" onClick={addItem}>
                Add Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiProductPage;
