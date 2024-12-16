import { RootState } from '../../../app/store';

import { ICartProduct } from './cartTypes';

export const selectCart = (state: RootState): ICartProduct[] => state.cart.cart;
