import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slice/sliderSlice.js";
import productsReducer from "../features/slice/productsSlice.js";
import cartReducer from "../features/slice/cartSlice.js";
import authReducer from "../features/slice/authSlice.js";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
