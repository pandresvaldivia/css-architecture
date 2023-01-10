import { useState } from 'react';
import { useMedia } from 'react-use';

import ButtonBase from '../../common/atoms/ButtonBase';

import LearnCard from './LearnCard';
import LearnMainCard from './LearnMainCard';

const LearnSection = () => {
	const [darkMode, setDarkMode] = useState(false);
	const fromMD = useMedia('(min-width: 640px)');

	const toggleDarkMode = () => {
		document.querySelector('body')?.classList.toggle('dark');
		setDarkMode(!darkMode);
	};

	return (
		<section className="section flex flex-col items-center bg-white px-4">
			<h2 className="text-desktop-h1 font-bold font-inter text-center mb-4 text-grey-700">
				¿Qué puedes aprender <span className="text-blue-500">en EDteam?</span>
			</h2>
			<p className="text-center text-grey-600 mb-12">
				¡Publicamos cursos nuevos cada semana para que #Notedetengas!
			</p>
			{fromMD && <LearnMainCard />}
			<div className="flex gap-4 mb-8 justify-center flex-wrap lg:gap-8 lg:grid lg:grid-cols-4">
				{!fromMD && (
					<LearnCard
						image="https://ed.team/images/utils/flat-computer.svg"
						link="https://ed.team/categorias/frontend"
						title="Desarrollo de software, cloud e inteligencia artificial"
						text="¡Domina las áreas con más demanda de trabajo! Estudia desde cero hasta experto
          programación, bases de datos, machine learning, seguridad informática, desarrollo móvil
          o videojuegos."
					/>
				)}
				<LearnCard
					image="https://ed.team/images/utils/palette-color.svg"
					link="https://ed.team/dise%C3%B1o"
					title="Diseño, ilustración y edición audiovisual"
					text="¡Transforma tus ideas en proyectos que la gente ame! Encuentra cursos de animación,
          diseño gráfico y dibujo."
				/>
				<LearnCard
					image="https://ed.team/images/utils/rocket.svg"
					link="https://ed.team/dise%C3%B1o"
					title="Negocios y emprendimiento"
					text="¡Haz realidad el sueño de crear tu propio negocio! Especialízate en finanzas, estrategias de marketing, ventas y publicidad."
				/>
				<LearnCard
					image="https://ed.team/images/utils/hand-trophy.svg"
					link="https://ed.team/dise%C3%B1o"
					title="Desarrollo personal y profesional"
					text="¡Explota tu potencial y sé la mejor versión de ti mismo! Aprende sobre liderazgo, productividad, hablar en público ¡y mucho más!"
				/>
				<LearnCard
					image="https://ed.team/images/utils/squares-toys.svg"
					link="https://ed.team/dise%C3%B1o"
					title="EDkids (niños)"
					text="¡Impulsa a tus hijos a construir un futuro exitoso desde hoy con su primer curso de programación!"
				/>
			</div>
			<ButtonBase onClick={toggleDarkMode} text="Comienza a estudiar gratis" />
		</section>
	);
};

export default LearnSection;
