import classNames from 'classnames';
import Image from 'next/image';

import learnCardStyles from '../../../styles/modules/home/learn-card.module.scss';

const LearnMainCard = () => {
	return (
		<a
			href="https://ed.team/categorias/frontend"
			className={classNames(learnCardStyles.root, 'mb-8 max-w-3xl')}
		>
			<article className="grid grid-cols-3 items-center gap-8 bg-blue-100 rounded-lg p-8">
				<div className="col-span-2">
					<h3 className="text-3xl font-semibold text-grey-700 mb-4">
						Desarrollo de software, cloud e inteligencia artificial
					</h3>
					<p className="text-grey-600 text-small">
						¡Domina las áreas con más demanda de trabajo! Estudia desde cero hasta experto
						programación, bases de datos, machine learning, seguridad informática, desarrollo móvil
						o videojuegos.
					</p>
				</div>
				<div>
					<Image
						src="https://ed.team/images/utils/flat-computer.svg"
						width={156}
						height={156}
						alt="laptop"
						className={classNames(learnCardStyles.image, 'col-span-1 w-full')}
					/>
				</div>
			</article>
		</a>
	);
};

export default LearnMainCard;
