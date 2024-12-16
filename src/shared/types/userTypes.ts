
export interface IUserState {
	showForm: boolean;
	formType: 'signup' | 'login';
}

export interface IUserFormProps {
	toggleCurrentFormType: (type: 'signup' | 'login') => void;
	closeForm: () => void;
}