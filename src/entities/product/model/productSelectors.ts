import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

const selectProducts = (state: RootState) => state.products.products;
const selectLoading = (state: RootState) => state.products.loading;
const selectCurrentPage = (state: RootState) => state.products.currentPage;
const selectTotalPages = (state: RootState) => state.products.totalPages;
const selectRelatedProducts = (state: RootState) => state.products.related;
const selectFilterProductsByPrice = (state: RootState) =>
	state.products.filtered;

// Мемоизированный селектор
const selectFilteredProducts = createSelector(
	[selectProducts, selectCurrentPage],
	(products, currentPage) => {
		const itemsPerPage = 10; // Количество продуктов на странице
		const startIndex = (currentPage - 1) * itemsPerPage;
		return products.slice(startIndex, startIndex + itemsPerPage);
	}
);

export {
	selectProducts,
	selectLoading,
	selectCurrentPage,
	selectTotalPages,
	selectRelatedProducts,
	selectFilterProductsByPrice,
	selectFilteredProducts,
};
