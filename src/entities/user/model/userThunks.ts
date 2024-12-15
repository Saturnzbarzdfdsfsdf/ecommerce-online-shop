import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	apiCreateUserRequest,
	apiLoginRequest,
	apiUpdateUserRequest,
	apiGetProfileRequest,
	IUser,
} from '../../../shared/api/user/index';

import { ErrorType, RejectedDataType } from '../../../shared/types/index';

const handleError = (err: unknown) => {
	const knownError = err as ErrorType;
	return {
		messageError: knownError.message,
		status: knownError.response?.status,
	};
};

export const createUserThunk = createAsyncThunk<
	{ user: IUser },
	IUser,
	{ readonly rejectValue: RejectedDataType }
>('users/createUser', async (payload, thunkAPI) => {
	try {
		const response = await apiCreateUserRequest(payload);

		return response;
	} catch (err: unknown) {
		return thunkAPI.rejectWithValue(handleError(err));
	}
});

export const loginUserThunk = createAsyncThunk<
	{ token: string; user: IUser },
	{ email: string; password: string },
	{ readonly rejectValue: RejectedDataType }
>('users/loginUser', async (payload, thunkAPI) => {
	try {

		const response = await apiLoginRequest(payload);
		const userProfile = await apiGetProfileRequest(response.token);
		
		return { token: response.token, user: userProfile };
		
	} catch (err) {
		return thunkAPI.rejectWithValue(handleError(err));
	}
});

export const updateUserThunk = createAsyncThunk<
	{ user: IUser },
	{ id: string; data: Partial<IUser> },
	{ readonly rejectValue: RejectedDataType }
>('users/updateUser', async (payload, thunkAPI) => {
	try {
		const response = await apiUpdateUserRequest(payload.id, payload.data);
		return response;
	} catch (err) {
		return thunkAPI.rejectWithValue(handleError(err));
	}
});
