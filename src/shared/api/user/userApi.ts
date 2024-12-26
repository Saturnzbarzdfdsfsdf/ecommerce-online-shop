import { apiPost, apiGet } from '../base';

import { IUser } from './index';

const USERS_ENDPOINT = 'users';

// Функция для созданию Юзера
export const apiCreateUserRequest = async (payload: IUser): Promise<IUser> => {
	const response = await apiPost<IUser, IUser>(`${USERS_ENDPOINT}`, payload);
	return response; // Возвращаем только объект IUser
};

// Функция для логина
export const apiLoginRequest = async (payload: {
	email: string;
	password: string;
}): Promise<{ token: string; user: IUser }> => {
	return await apiPost<
		{ token: string; user: IUser },
		{ email: string; password: string }
	>('login', payload);
};

// Функция для выполнения запроса на получение профиля
export const apiGetProfileRequest = async (token: string): Promise<IUser> => {
	const response = await apiGet<IUser>('profile', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response;
};

// Функция для обновления пользователя
export const apiUpdateUserRequest = async (
	id: number,
	data: Partial<IUser>
): Promise<IUser> => {
	const response = await apiPost<IUser , Partial<IUser>>(
		`users/${id}`,
		data
	);
	return response;
};
