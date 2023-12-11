import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload)
            if (itemInCart) {
                itemInCart.quantity++
            } else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            if (item) {
                item.quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        clearAllItems: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearAllItems } = cartSlice.actions
export  default cartSlice.reducer
