import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../product/cartSlice";
// import { combineReducers } from 'redux';
import authReducer from "../../pages/auth/authReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    },
});
