import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {ICartItem} from '../../interfaces/CartItem';
import IRestaurant from '../../interfaces/Restaurant';

export interface RestaurantState {
    restaurant: IRestaurant
}

const initialState: RestaurantState = {
	restaurant: {
		id: null,
		title: null,
		address: null,
		genre: null,
		rating: null,
		imgUrl: null,
		short_description: null,
		dishes: null,
		lat: null,
		long: null
	}
};

export const restaurantSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
		}
	},
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;


export default restaurantSlice.reducer;