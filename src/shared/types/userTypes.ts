
export interface IUserFormProps {
	toggleCurrentFormType: (type: 'signup' | 'login') => void;
	closeForm: () => void;
}