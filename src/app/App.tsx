import { useEffect } from 'react';

import { useAppDispatch } from '../redux/store';

import { Header } from '../widget/Header/index';
import { Footer } from '../widget/Footer';
import { Sidebar } from '../widget/Sidebar/index';

// Импорт роутинга
import AppRoutes from './routers/Routes';

// импорт запроса с redux
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

// Аргумент типа "AsyncThunkAction<Category[], void, AsyncThunkConfig>" нельзя назначить параметру типа "UnknownAction".ts(2345)
// (alias) fetchCategories(): AsyncThunkAction<Category[], void, AsyncThunkConfig>
// import fetchCategories
