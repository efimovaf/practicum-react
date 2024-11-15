import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { getIngredients } from '../services/ingredients/action';
import {
	getAllIngredients,
	getDataRequestIngredients,
} from '../services/ingredients/selectors';
import AppHeader from '../components/app-header';
import {
	HomePage,
	IngredientModalPage,
	IngredientPage,
	LoginPage,
	RegisterPage,
	ForgotPasswordPage,
	ResetPasswordPage,
	ProfilePage,
} from '../pages';
import style from './app.module.scss';

export const App = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();

	const state = location.state as { backgroundLocation?: Location };

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
					<Routes location={state?.backgroundLocation || location}>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/forgot-password' element={<ForgotPasswordPage />} />
						<Route path='/reset-password' element={<ResetPasswordPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/ingredients/:id' element={<IngredientPage />} />
					</Routes>

					{state?.backgroundLocation && (
						<Routes>
							<Route
								path='/ingredients/:id'
								element={<IngredientModalPage />}
							/>
						</Routes>
					)}
				</div>
			) : null}
		</>
	);
};
