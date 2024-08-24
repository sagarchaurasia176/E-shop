import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// this is kind of your useState

export const CatalogSlice = createSlice({
  name: "Carts",
  initialState:[],
  reducers: {
    addBtn: (state, action) => {
      state.push(action.payload);
    },
    removeBtn: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
// these are the main properties of redux
export const { addBtn, removeBtn } = CatalogSlice.actions;
export default CatalogSlice.reducer;
