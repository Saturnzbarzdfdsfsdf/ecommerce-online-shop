import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// fake api
export const API_URL = 'https://api.escuelajs.co/api/v1/';

// экземпляр axios
const axiosInstance: AxiosInstance = axios.create({
	// AxiosInstance настройка запроса
	baseURL: API_URL,
	timeout: 12000, //Максимальное время ожидания от сервера
	headers: {
		'Content-Type': 'application/json', // data передается в формате JSON
	},
});

// Асинхронная функция для выполнения GET-запросов
export const apiGet = async <T>(
	endpoint: string,
	options: AxiosRequestConfig = {} // Конфигурация запроса
): Promise<T> => {
	const response: AxiosResponse<T> = await axiosInstance.get(endpoint, options);
	return response.data;
};

// Асинхронная функция для выполнения Post-запросов
export const apiPost = async <T, U>(
	endpoint: string,
	data: U,
	options: AxiosRequestConfig = {} // Конфигурация запроса
): Promise<T> => {
	const response: AxiosResponse<T> = await axiosInstance.post(
		endpoint,
		data,
		options
	);
	return response.data;
};