import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ICartItem} from "../../interfaces/CartItem";

export interface UserState {
    items: ICartItem[]
}

const initialState: UserState = {
    items: [],
}

export const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);

            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Product ${action.payload.id} as its not in cart`)
            }

            state.items = newBasket;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = userSlice.actions

export const selectCartItems = state => state.cart.items;

export const selectCartItemsWithId = (state, id) => state.cart.items.filter((item) => item.id === id)

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total += item.price,0)
export default userSlice.reducer