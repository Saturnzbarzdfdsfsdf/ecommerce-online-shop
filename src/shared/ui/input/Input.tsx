import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';


import './input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	/** Additional styles. */
	readonly className?: string;
}

const Input: FC<IInput> = props => {
	const {
		value,
		type,
		onChange,
		onBlur,
		onFocus,
		onKeyDown,
		placeholder,
		className,
	} = props;

	const [inputData, setInputData] = useState<string>('');

	const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
		setInputData(e.target.value);
	};

	return (
		<input
			className={className}
			type={type}
			value={value ?? inputData}
			placeholder={placeholder}
			onBlur={onBlur}
			onFocus={onFocus}
			onChange={onChange ?? onChangeInputData}
			onKeyDown={onKeyDown}
		/>
	);
};

export default Input