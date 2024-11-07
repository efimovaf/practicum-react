import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { getIngredients } from '../services/ingredients/action';
import { getAllIngredients } from '../services/ingredients/selectors';
import AppHeader from '../components/app-header';
import BurgerIngredients from '../components/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor';
import style from './app.module.scss';

export const App = () => {
	const dispatch = useAppDispatch();

	const { dataRequest, data } = useAppSelector((state) => ({
		dataRequest: state.ingredients.dataRequest,
		data: getAllIngredients(state),
	}));

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

	return (
		<>
			{!dataRequest && data && data.length > 0 ? (
				<div className={style.app}>
					<AppHeader />
					<main className={style.main}>
						<DndProvider backend={HTML5Backend}>
							<BurgerIngredients />
							<BurgerConstructor />
						</DndProvider>
					</main>
				</div>
			) : null}
		</>
	);
};
