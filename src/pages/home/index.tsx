import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';
import style from './home-page.module.scss';

const HomePage: React.FC = () => {
	return (
		<main className={style.main}>
			<DndProvider backend={HTML5Backend}>
				<BurgerIngredients />
				<BurgerConstructor />
			</DndProvider>
		</main>
	);
};

export default HomePage;
