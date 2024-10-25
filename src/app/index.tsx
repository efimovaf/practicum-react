import { useData } from '../components/hooks/data';
import AppHeader from '../components/app-header';
import BurgerIngredients from '../components/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor';
import style from './app.module.scss';

export const App = () => {
	const { isLoadingData, data, buns, sauces, mains, bunCurrent } = useData();

	return (
		<>
			{!isLoadingData && data.length > 0 ? (
				<div className={style.app}>
					<AppHeader />
					<main className={style.main}>
						<BurgerIngredients buns={buns} sauces={sauces} mains={mains} />
						{bunCurrent && (
							<BurgerConstructor
								bun={bunCurrent}
								dataList={[...sauces, ...mains]}
							/>
						)}
					</main>
				</div>
			) : null}
		</>
	);
};
