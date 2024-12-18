export { default as ProductCard } from './ui/ProductCard';

// api
export { fetchProducts } from './model/productThunk';

// slice
export { setCurrentPage } from './model/productsSlice';

// type
export { type IProductCard, type IProductsProps } from './model/types';

// selectors
export {
	selectProducts,
	selectLoading,
	selectCurrentPage,
	selectRelatedProducts,
	selectFilterProductsByPrice,
	// selectFilteredProducts,
} from './model/selectors';
