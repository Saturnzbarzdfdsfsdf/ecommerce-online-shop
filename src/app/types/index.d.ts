declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

declare type RootState = ReturnType<typeof import('../../redux/store').store.getState>;

declare type AppDispatch = typeof import('../../redux/store').store.dispatch;

declare module '*.css' {
	const classes: { [className: string]: string };
	export default classes;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

// Декларируем переменные окружения
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_API_URL: string;
	readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}