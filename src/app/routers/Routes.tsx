import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/index';
import { SingleProduct } from '../../pages/SingleProduct/index';
import { SingleCategory } from '../../pages/Categories/index';
import { Profile } from '../../pages/Profile/index';

import { Cart } from '../../features/Cart/index';

import { ROUTES } from '../../shared/consts/routes';
// Роутинг по страницам
const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
			<Route path={ROUTES.CART} element={<Cart />} />
		</Routes>
	);
};

export default AppRouter;
