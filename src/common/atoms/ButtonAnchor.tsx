import classNames from 'classnames';

const ButtonAnchor = ({ link, text, className }: ButtonAnchorProps) => {
	return (
		<a href={link} className={classNames(className, 'button')}>
			{text}
		</a>
	);
};

type ButtonAnchorProps = {
	link: string;
	text: string;
	className?: string;
};

export default ButtonAnchor;
