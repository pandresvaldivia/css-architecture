import classNames from 'classnames';

import bannerStyles from '../../../styles/modules/home/banner.module.scss';

const BannerAnimation = () => {
	return (
		<div className="relative pt-12 lg-cols-6 grid grid-cols-[1fr_95%] max-w-[23.75rem] my-0 mx-auto lg:max-w-none w-[72%]">
			<img
				className={classNames(bannerStyles.man, 'w-full')}
				src="/images/home-banner/tech-man.png"
				alt="Hombre metaverso"
			/>
			<img
				className={classNames(bannerStyles.go, 'absolute pointer-events-none right-0')}
				src="/images/home-banner/go-gopher.png"
				alt="Mascota de Go"
			/>
			<div className={classNames(bannerStyles.circles, 'absolute pointer-events-none')}>
				<img
					className={classNames(bannerStyles.logo, 'absolute pointer-events-none')}
					src="/images/home-banner/edteam-logo.png"
					alt="Logo de EDteam"
				/>
				<img
					className="absolute pointer-events-none animate-banner-animation"
					src="/images/home-banner/internal-techs.png"
					alt="Esfera de tecnologías"
				/>
				<img
					className="animate-banner-animation-bigger absolute pointer-events-none"
					src="/images/home-banner/external-techs.png"
					alt="Esfera de tecnologías"
				/>
				<img
					className="animate-banner-animation absolute pointer-events-none"
					src="/images/home-banner/power-sphere.png"
					alt="Esfera de poder"
				/>
			</div>
		</div>
	);
};

export default BannerAnimation;
