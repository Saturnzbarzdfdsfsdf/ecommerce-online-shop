export interface IUser {
	name: string;
	avatar: string;
}


export interface IUserState {
	showForm: boolean;
	formType: 'signup' | 'login';
}

export interface IFormUserValues {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

export interface IUserFormProps {
	toggleCurrentFormType: (type: 'signup' | 'login') => void;
	closeForm: () => void;
}