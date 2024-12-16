export interface IUser {
	id: number;
	email: string;
	password?: string;
	name: string;
	avatar: string;
	role: string;
	creationAt: string;
	updatedAt: string;
}

export interface IUserState {
	currentUser: IUser | null;
	cart: Array<{ id: number; quantity: number }>;

	isLoading: boolean;
	showForm: boolean;
	formType: 'signup' | 'login';
}
