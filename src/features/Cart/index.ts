export { default as Cart } from './ui/Cart';

export { addItemToCart, removeItemCart } from './model/cartSlices';

export { selectCart } from './model/cartSelectors';

export { type ICart, type ICategory, type ICartProduct } from './model/types';