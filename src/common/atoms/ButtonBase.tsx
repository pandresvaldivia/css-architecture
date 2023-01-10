import classNames from 'classnames';
const ButtonBase = ({ text, onClick, className }: ButtonBaseProps) => {
	return (
		<button onClick={onClick} className={classNames(className, 'button')}>
			{text}
		</button>
	);
};

type ButtonBaseProps = {
	text: string;
	onClick: () => void;
	className?: string;
};

export default ButtonBase;
