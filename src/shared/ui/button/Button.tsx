import { FC } from 'react';

interface IButton {
	/** Button text. */
	readonly children: string;
	/** Icon before text. */
	readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	/** Button disable modifier. */
	readonly disabled?: boolean;
	/** Additional styles. */
	readonly className?: string;

	/** The function is executed when the button is pressed. */
	readonly onClick?: () => void;
}

const Button: FC<IButton> = props => {
	const {
		children,
		Icon,
		disabled = false,
		className,
		onClick,
	} = props;

	return (
		<button 
		type='button' 
		disabled={disabled}
		onClick={onClick} 
		className={className}
		>
			{Icon && <Icon />}
			{children}
		</button>
	);
};

export default Button;
