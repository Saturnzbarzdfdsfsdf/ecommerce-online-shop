import { RootState } from '../../../app/store';

import { ICartProduct } from './types';

export const selectCart = (state: RootState): ICartProduct[] => state.cart.cart;
