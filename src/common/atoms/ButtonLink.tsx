import classNames from 'classnames';
import Link from 'next/link';

const ButtonLink = ({ link, text, className }: ButtonLinkProps) => {
	return (
		<Link href={link} className={classNames(className, 'button')}>
			{text}
		</Link>
	);
};

type ButtonLinkProps = {
	link: string;
	text: string;
	className?: string;
};

export default ButtonLink;
