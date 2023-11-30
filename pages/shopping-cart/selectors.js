import { createSelector } from '@reduxjs/toolkit'


const cartItemSelector = state => {
    return state.cart?.cartItems;
}
// Count number of product in cart
export const cartItemCountSelector = createSelector(
    cartItemSelector,
    cartItems => cartItems.reduce((count, item) => count + item.quantity, 0)
);
export const cartTotalSelector = createSelector(
    cartItemSelector,
    cartItems => cartItems?.reduce((total, item) => total + (item.product.product.SalePrice * item.quantity), 0)
);
export const cartList = createSelector(
    cartItemSelector,
    cartItems => cartItems
);