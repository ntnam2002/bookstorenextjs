//Build Slice
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },

    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex(
                (x) => x.masp === newItem.masp,
            );
            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                // add to cart
                state.cartItems.push(newItem);
            }
        },
        updateQuantityAndPrice(state, action) {
            const { masp, newQuantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x.masp === masp);
            if (index >= 0) {
                state.cartItems[index].quantity = newQuantity;
                state.cartItems[index].gia = calculatePriceForItem(
                    state.cartItems[index],
                );
            }
        },
        resetCartState(state) {
            // Reset cart state to initial state
            state.showMiniCart = false;
            state.cartItems = [];
        },
        setQuantity(state, action) {
            const { masp, quantity } = action.payload;
            // Check if product is avaiable in cart
            const index = state.cartItems.findIndex((x) => x.masp === masp);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload.masp;
            state.cartItems = state.cartItems.filter(
                (x) => x.masp !== idNeedToRemove,
            );
        },
    },
});

const { actions, reducer } = cartSlice;
const calculatePriceForItem = (item) => {
    return item.gia * item.quantity;
};
export const {
    showMiniCart,
    hideMiniCart,
    addToCart,
    setQuantity,
    removeFromCart,
    updateQuantityAndPrice,
    resetCartState,
} = actions;
export default reducer;
