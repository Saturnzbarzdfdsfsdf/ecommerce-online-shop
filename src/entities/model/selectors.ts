import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

const selectProducts = (state: RootState) => state.product.products;
const selectLoading = (state: RootState) => state.product.loading;
const selectCurrentPage = (state: RootState) => state.product.currentPage;
const selectTotalPages = (state: RootState) => state.product.totalPages;

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
	selectFilteredProducts,
};
