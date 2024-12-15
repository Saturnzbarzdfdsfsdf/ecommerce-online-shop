import { Header } from '../widget/Header/index';
import { Footer } from '../widget/Footer';
import { Sidebar } from '../widget/Sidebar/index';

import UserForm from '../widget/User/ui/UserForm';

import AppRoutes from './routers/Routes';

const App = () => {
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
