import { configureStore } from "@reduxjs/toolkit";
import CatalogSliceReducer from "../CatalogSlice";

export const MainStore = configureStore({
  reducer: {
    Carts: CatalogSliceReducer,
  },
});
