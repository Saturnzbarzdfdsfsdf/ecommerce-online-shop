import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './app/store.ts'

import App from './app/App.tsx';

import './shared/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<Provider store={store}>
			<StrictMode>
				<App />
			</StrictMode>
		</Provider>
	</BrowserRouter>
);
