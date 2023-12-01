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

            console.log("Existing Cart Items:", state.cartItems);
            console.log("New Item:", newItem);

            if (index >= 0) {
                // increase quantity
                console.log("Item already in cart. Updating quantity.");
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                // add to cart
                console.log("Item not in cart. Adding to cart.");
                state.cartItems.push(newItem);
            }

            console.log("Updated Cart:", state.cartItems);
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
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter(
                (x) => x.masp !== idNeedToRemove,
            );
        },
    },
});

const { actions, reducer } = cartSlice;
export const {
    showMiniCart,
    hideMiniCart,
    addToCart,
    setQuantity,
    removeFromCart,
} = actions;
export default reducer;
