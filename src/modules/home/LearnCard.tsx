import classNames from 'classnames';
import Image from 'next/image';

import learnCardStyles from '../../../styles/modules/home/learn-card.module.scss';

const LearnCard = ({ image, link, title, text }: LearnCardProps) => {
	return (
		<a
			href={link}
			className={classNames(
				learnCardStyles.root,
				'text-center px-3 pt-4 pb-8 rounded-lg hover:bg-grey-200 transition-colors max-w-sm'
			)}
		>
			<article>
				<div className="flex justify-center mb-2">
					<Image
						src={image}
						width={100}
						height={100}
						alt="laptop"
						className={classNames(learnCardStyles.image)}
					/>
				</div>
				<div>
					<h3 className="text-xl font-semibold text-grey-700 mb-2">{title}</h3>
					<p className="text-grey-600 text-small">{text}</p>
				</div>
			</article>
		</a>
	);
};

type LearnCardProps = {
	image: string;
	link: string;
	title: string;
	text: string;
};

export default LearnCard;
