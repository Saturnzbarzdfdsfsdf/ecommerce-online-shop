export interface IUser {
	id?: string;
	name: string;
	email: string;
}


export interface IUserState {
	currentUser: IUser | null;
	cart: Array<{ id: string; quantity: number }>;
  
	isLoading: boolean;
	showForm: boolean;
	formType: 'signup' | 'login';
}