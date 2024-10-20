import { data } from './utils/data';
import AppHeader from '../components/app-header';
import BurgerIngredients from '../components/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor';
import style from './app.module.scss';

export const App = () => {
	const buns = data.filter((it) => it.type === 'bun');
	const sauces = data.filter((it) => it.type === 'sauce');
	const mains = data.filter((it) => it.type === 'main');
	const bunCurrent = buns[1];

	return (
		<div className={style.app}>
			<AppHeader />
			<main className={style.main}>
				<BurgerIngredients buns={buns} sauces={sauces} mains={mains} />
				<BurgerConstructor bun={bunCurrent} dataList={[...sauces, ...mains]} />
			</main>
		</div>
	);
};
