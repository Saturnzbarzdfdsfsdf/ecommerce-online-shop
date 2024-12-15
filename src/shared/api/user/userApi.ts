import { apiPost } from '../base';

import { IUser } from './index';

const USERS_ENDPOINT = 'users';

export const createUserRequest = async (
  payload: IUser): Promise<{ user: IUser }> => {
    
	return await apiPost<{ user: IUser }, IUser>(`${USERS_ENDPOINT}`, payload);
};
