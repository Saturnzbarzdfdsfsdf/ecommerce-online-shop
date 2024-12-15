import { useEffect } from 'react';

import { useAppDispatch } from '../shared/lib/Hook/Hooks';

import { Header } from '../widget/Header/index';
import { Footer } from '../widget/Footer';
import { Sidebar } from '../widget/Sidebar/index';


import AppRoutes from './routers/Routes';

import { fetchCategories } from '../redux/categories/categoriesSlice';
import { fetchProducts } from '../redux/products/productsSlice';

import UserForm from '../widget/User/ui/UserForm';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />
			<UserForm />
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
};

export default App;


