import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// this is kind of your useState

const initialState = {
  cartsArray: [],
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  singupData: null,
};

export const CatalogSlice = createSlice({
  name: "Carts",
  initialState: initialState,
  reducers: {
    addBtn: (state, action) => {
      state.cartsArray.push(action.payload);
    },
    removeBtn: (state, action) => {
      return state.cartsArray.filter((item) => item.id !== action.payload);
    },
    setLoading: (state, value) => {
      state.loading = value.payload;
    },
    //token verify
    setToken: (state, value) => {
      state.token = value.payload;
    },
    setSingupData(state, value) {
      state.singupData = value.payload;
    },
  },
});
// these are the main properties of redux
export const { addBtn, removeBtn, setSingupData, setToken, setLoading } =
  CatalogSlice.actions;
export default CatalogSlice.reducer;
