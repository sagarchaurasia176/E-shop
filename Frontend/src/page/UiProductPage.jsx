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
    <div className="  p-3   bg-slate-800 ">
      <div className="max-w-[300px]  flex-wrap bg-white sm:items-center rounded-lg ">
        {/* Title */}
        <div>
          <span className="font-semibold flex items-center">
            {items.title.slice(0, 80)}
          </span>
        </div>
        {/* Image */}
        <div className="  ml-[5rem]  w-[5rem]  md:w-[5rem]">
          <img src={items.image} alt={items.title} />
        </div>
        {/* Description */}
        <div className="font-sans">
          <span>
            {readMore ? items.description : items.description.slice(0, 90)}
          </span>
          <p
            className="cursor-pointer text-end p-1 font-semibold"
            onClick={toggle}
          >
            {readMore ? "Read less" : "Read more"}
          </p>
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
                className="bg-slate-600 text-white p-2"
                onClick={removeItem}
              >
                Remove Cart
              </button>
            ) : (
              <button className="bg-slate-600 text-white p-2" onClick={addItem}>
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
