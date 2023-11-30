import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../shopping-cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
