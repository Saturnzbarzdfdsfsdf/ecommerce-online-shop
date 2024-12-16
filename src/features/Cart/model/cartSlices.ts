import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartProduct } from '../index';

interface CartState {
	cart: ICartProduct[];
}

const initialState: CartState = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, { payload }: PayloadAction<ICartProduct>) => {
			const existingItem = state.cart.find(item => item.id === payload.id);

			if (existingItem) {
				// Если продукт уже существует в корзине, обновляем количество
				existingItem.quantity += payload.quantity || 1; // Увеличиваем количество на 1 по умолчанию
			} else {
				// Если продукт новый, добавляем его в корзину
				state.cart.push({ ...payload, quantity: 1 });
			}
		},
		removeItemCart: (state, { payload }: PayloadAction<number>) => {
			state.cart = state.cart.filter(({ id }) => id !== payload);
		},
	},
});

export const { addItemToCart, removeItemCart } = cartSlice.actions;

export default cartSlice.reducer;
