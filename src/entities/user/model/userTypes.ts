import { type IUser } from '../../../shared/api/user/index';

export interface IUserState {
	currentUser: IUser | null;
	cart: Array<{ id: number; quantity: number }>;

	isLoading: boolean;
	showForm: boolean;
	formType: 'signup' | 'login';
}
