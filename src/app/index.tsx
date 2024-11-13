import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { getIngredients } from '../services/ingredients/action';
import {
	getAllIngredients,
	getDataRequestIngredients,
} from '../services/ingredients/selectors';
import AppHeader from '../components/app-header';
import HomePage from '../pages/home';
import style from './app.module.scss';

export const App = () => {
	const dispatch = useAppDispatch();

	const dataRequest = useAppSelector(getDataRequestIngredients);
	const data = useAppSelector(getAllIngredients);

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

	return (
		<>
			{!dataRequest && data.length > 0 ? (
				<div className={style.app}>
					<AppHeader />
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</div>
			) : null}
		</>
	);
};
