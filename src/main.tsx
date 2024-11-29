import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './redux/store.ts'

import App from './app/App.tsx';

import './shared/styles/index.css'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter
		future={{
			v7_relativeSplatPath: true,
		}}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
