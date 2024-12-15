import { apiPost, apiGet } from '../base';

import { IUser } from './index';

const USERS_ENDPOINT = 'users';

// Функция для созданию Юзера
export const apiCreateUserRequest = async (
	payload: IUser
): Promise<{ user: IUser }> => {
  
	return await apiPost<{ user: IUser }, 
  IUser>(`${USERS_ENDPOINT}`, payload);
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
    id: string,
    data: Partial<IUser>
): Promise<{ user: IUser }> => {

    return await apiPost<{ user: IUser }, Partial<IUser>>(`users/${id}`, data);
};