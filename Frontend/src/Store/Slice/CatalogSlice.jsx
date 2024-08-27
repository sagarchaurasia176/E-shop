import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// this is kind of your useState

const initialState = {
  cartsArray : [],
  loading : false
}
export const CatalogSlice = createSlice({
  name: "Carts",
  initialState : initialState,
  reducers: {
    addBtn: (state, action) => {
      state.push(action.payload);
    },
    removeBtn: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    setLoading : (state , value)=>{
        state.loading = value.payload
    }
  },
});
// these are the main properties of redux
export const { addBtn, removeBtn , setLoading } = CatalogSlice.actions;
export default CatalogSlice.reducer;



// - pending task
// - loading setup again 
// - and backend connection check