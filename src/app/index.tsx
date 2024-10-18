import { data } from './utils/data';
import AppHeader from '../components/app-header';
import BurgerIngredients from '../components/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor';
import style from './app.module.scss';

export interface IData {
	_id: string;
	name: string;
	type: string;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	price: number;
	image: string;
	image_mobile: string;
	image_large: string;
	__v: number;
}

export const App = () => {
	const buns = data.filter((it) => it.type === 'bun');
	const sauces = data.filter((it) => it.type === 'sauce');
	const mains = data.filter((it) => it.type === 'main');
	const bunCurrent = buns[1];

	return (
		<div className={style.app}>
			<AppHeader />
			<div className={style.content}>
				<BurgerIngredients buns={buns} sauces={sauces} mains={mains} />
				<BurgerConstructor bun={bunCurrent} dataList={[...sauces, ...mains]} />
			</div>
		</div>
	);
};
