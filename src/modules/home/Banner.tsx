import ButtonAnchor from '../../common/atoms/ButtonAnchor';

import BannerAnimation from './BannerAnimation';

import bannerStyles from '../../../styles/modules/home/banner.module.scss';

const Banner = () => {
	return (
		<section className={bannerStyles.root}>
			<div className="max-w-8xl mx-auto px-4 pt-8 pb-16 flex flex-col-reverse gap-4 lg:flex-row lg:py-0 lg:items-center 2xl:px-0 ">
				<div className="text-center lg:text-left">
					<h1 className="font-inter font-extrabold mb-4">
						<span className="text-xl text-grey-100 xl:text-[30px]">
							Cursos de programación y tecnología{' '}
						</span>{' '}
						<br />
						<span className="text-xl text-yellow-300 xl:text-[36px]">con las mejores</span>
						<br />
						<span className="text-xl text-yellow-300 xl:text-[36px]">explicaciones en español</span>
						<br />
					</h1>
					<p className="text-small text-blue-50 mb-8 max-w-2xl mx-auto lg:mx-0 lg:text-normal">
						Dile adiós a los cursos mal explicados que te frustan y te desmotivan. Comienza a
						estudiar gratis con nosotros y descubre por qué en español nadie explica mejor que
						EDteam.
					</p>
					<ButtonAnchor
						link="#"
						text="Comienza a estudiar gratis"
						className="mb-2 bg-yellow-400 text-yellow-900 hover:bg-yellow-300 font-semibold text-sm px-5 py-2.5"
					/>
					<p className="text-blue-200 italic text-smaller">*Solo necesitas un correo electrónico</p>
				</div>
				<BannerAnimation />
			</div>
		</section>
	);
};

export default Banner;
