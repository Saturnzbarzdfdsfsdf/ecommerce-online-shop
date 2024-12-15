import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUserRequest, IUser } from '../../../shared/api/user/index';

import { ErrorType, RejectedDataType } from '../../../shared/types/index';

export const createUser = createAsyncThunk<
	{ user: IUser },
	IUser,
	{ readonly rejectValue: RejectedDataType } // Вернется в случае ошибки
>('users/createUser', async (payload, thunkAPI) => {
	try {
		const response = await createUserRequest(payload);

		return response;
	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message,
			status: knownError.response?.status,
		});
	}
});
