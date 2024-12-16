import { FC } from 'react';

interface IButton {
	readonly children: string;
	readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	readonly disabled?: boolean;
	readonly className?: string;
	readonly type?: 'submit' | 'button' | 'reset' | undefined;
	readonly onClick?: () => void;
}

const Button: FC<IButton> = props => {
	const { type, children, disabled = false, className, onClick } = props;

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{children}
		</button>
	);
};

export default Button;
