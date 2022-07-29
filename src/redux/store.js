import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./productModalSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
  },
});
