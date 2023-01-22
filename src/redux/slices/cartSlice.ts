import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {ICartItem} from '../../interfaces/CartItem';

export interface CartState {
    items: ICartItem[]
}

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			state.items = [...state.items, action.payload];
		},
		removeFromCart: (state, action) => {
			const index = state.items.findIndex((item) => item.id === action.payload.id);

			const newBasket = [...state.items];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`Product ${action.payload.id} as its not in cart`);
			}

			state.items = newBasket;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsWithId = (state, id) => state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total += item.price,0);
export default cartSlice.reducer;