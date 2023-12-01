import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../product/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
