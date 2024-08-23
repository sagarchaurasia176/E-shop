import { addBtn, removeBtn } from "@/Store/Slice/CatalogSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UiProductPage = ({ items }) => {
  const [moveBtn, setMove] = useState(true);
  const [readMore, setMore] = useState(false);
  const toggle = () => {
    setMore(!readMore);
  };

  const dispatched = useDispatch();
  return (
    <div>
      <div className=" p-3 flex  items-center">
        <div className="  max-w-[300px]  borde shadow-md  p-9">
          {/* titile */}
          <div>
            <span className=" font-semibold flex items-center">
              {items.title.slice(0, 90)}
            </span>
          </div>
          <div className="  w-[11rem]">
            <img src={items.image} alt="" />
          </div>
          <div className=" font-sans w-[220px] ">
            <span className="">
              {readMore ? items.description : items.description.slice(0, 100)}
            </span>
            {readMore ? (
              <>
                <p
                  className=" cursor-pointer text-end p-1   text-black font-semibold"
                  onClick={() => toggle()}
                >
                  read more
                </p>
              </>
            ) : (
              <>
                <p
                  className=" cursor-pointer text-end p-1  font-semibold"
                  onClick={() => toggle()}
                >
                  read less
                </p>
              </>
            )}
          </div>
          <br />
          {/* price */}
          <div
            className="    flex justify-between text-green-950  p-3 
           text-center  rounded-md"
          >
            <span className="  text-red-600">{items.price}</span>
            <button className=" cursor-pointer font-semibold  border  px-2 py-2  ">
              {moveBtn ? (
                <p onClick={dispatched(addBtn)}>Add Item</p>
              ) : (
                <p onClick={dispatched(removeBtn)}>Remove Item</p>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiProductPage;
