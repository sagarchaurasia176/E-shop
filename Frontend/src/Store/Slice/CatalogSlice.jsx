import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartPost: [],
};
export const CatalogSlice = createSlice({
  name: "Carts",
  initialState,
  reducers: {
    addBtn: (state, action) => {
      state.cartPost.push(action.payload);
    },
    removeBtn: (state, action) => {
      return state.cartPost.filter((item) => item.id != action.payload);
    },
  },
});
// these are the main properties of redux
export const { addBtn, removeBtn, cartPost} = CatalogSlice.actions;
export default CatalogSlice.reducer;
