export { default as ProductCard } from './ui/ProductCard';

// api
export { fetchProducts } from './model/productThunk';

// slice
export { setCurrentPage } from './model/productsSlice';

// type
export { type IProductCard } from './model/types';

// selectors
export {
	selectProducts,
	selectLoading,
	selectCurrentPage,
	selectTotalPages,
	selectRelatedProducts,
	selectFilterProductsByPrice,
	// selectFilteredProducts,
} from './model/selectors';
