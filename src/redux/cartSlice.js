// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
//   totalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//       state.totalPrice += action.payload.price;
//     },
//     removeFromCart: (state, action) => {
//       const index = state.cart.findIndex((item) => item.id === action.payload);
//       if (index !== -1) {
//         state.totalPrice -= state.cart[index].price;
//         state.cart.splice(index, 1);
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If already in cart, just increase quantity
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      } else {
        // Else add new item with quantity
        state.cart.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },

    removeFromCart(state, action) {
      const itemToRemove = state.cart.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item && quantity > 0) {
        const priceDifference = item.price * (quantity - item.quantity);
        item.quantity = quantity;
        state.totalPrice += priceDifference;
      }
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
