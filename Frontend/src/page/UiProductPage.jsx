import { addBtn, removeBtn } from "@/Store/Slice/CatalogSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UiProductPage = ({ items }) => {
  const [readMore, setMore] = useState(false);
  const toggle = () => setMore(!readMore);
  const dispatch = useDispatch();

  const Carts = useSelector((state) => state.Carts.emptyCart);

  let isItemInCart = Carts.some((val) => val.id === items.id);
  console.log("isItem", isItemInCart);

  // 
  const addItem = ()=>{
    dispatch(addBtn(items));
    toast.success("Item added")
  }
  const removeItem = () =>{
      dispatch(removeBtn(items.id));
      toast.error("Item removed")
    }

  return (
    <div className="p-3 flex items-center">
      <div className="max-w-[300px] border shadow-md p-9">
        {/* Title */}
        <div>
          <span className="font-semibold flex items-center">
            {items.title.slice(0, 90)}
          </span>
        </div>
        {/* Image */}
        <div className="w-[11rem]">
          <img src={items.image} alt={items.title} />
        </div>
        {/* Description */}
        <div className="font-sans w-[220px]">
          <span>
            {readMore ? items.description : items.description.slice(0, 100)}
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
          className="flex justify-between text-green-950 p-3 
          text-center rounded-md"
        >
          <span className="text-red-600">{items.price}</span>

          <div>
            {isItemInCart ? (
              <>
                <button onClick={addItem}> Remove Item</button>
              </>
            ) : (
              <>
                <button onClick={removeItem}>Add Items</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiProductPage;
