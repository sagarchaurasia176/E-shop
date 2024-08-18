import { toast } from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "@/lib/StatusCode";

const initialState = {
  post: [],
  Status: StatusCode.IDEAL,
};

// loading parts apply here
export const ProductSlice = createSlice({
  name: "AddCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ProductApi.pending, (state, action) => {
        state.Status = StatusCode.LOADING;
      })
      .addCase(ProductApi.fulfilled, (state, action) => {
        state.Status = StatusCode.LOADING;
        state.post = action.payload;
        state.Status = StatusCode.IDEAL;
      })
      .addCase(ProductApi.rejected, (state, action) => {
        state.Status = StatusCode.LOADING;
        toast.error("internal error in the APISlice Page");
        state.Status = StatusCode.ERROR;
      });
  },
}); // exports the funcitons here
export const { post } = ProductSlice.actions;
export default ProductSlice.reducer;

// import { data } from "autoprefixer";
export const ProductApi = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data; // This will be the payload of the fulfilled action
});