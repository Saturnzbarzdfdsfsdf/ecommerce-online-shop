import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart } from '../index';

const initialState: ICart = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (
			state,
			{ payload }: PayloadAction<{ id: number; quantity?: number }>
		) => {
			let newCart = [...state.cart];

			const existingItem = state.cart.find(item => item.id === payload.id);

			if (existingItem) {
				newCart = newCart.map(item =>
					item.id === payload.id
						? { ...item, quantity: payload.quantity || item.quantity + 1 }
						: item
				);
			} else {
				newCart.push({ ...payload, quantity: 1 });
			}

			state.cart = newCart;
		},
		removeItemFromCart: (state, { payload }: PayloadAction<string>) => {
			state.cart = state.cart.filter(({ id }) => id !== payload);
		},
	},
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
