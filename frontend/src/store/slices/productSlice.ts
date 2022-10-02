import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "interfaces/IProduct";
interface InterfaceInitialState {
  products: IProduct[];
  comments: any;
}

const initialState: InterfaceInitialState = {
  products: [],
  comments: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsReducer(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProductsReducer } = productsSlice.actions;

export default productsSlice.reducer;
