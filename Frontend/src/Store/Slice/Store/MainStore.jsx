import { configureStore } from "@reduxjs/toolkit";
import { CatalogSlice } from "../CatalogSlice";

export const MainStore = configureStore({
  reducer: {
    Carts: CatalogSlice.reducer ,
  },
});
