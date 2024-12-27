import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { getIngredients } from '../services/ingredients/action';
import { checkUserAuth } from '../services/user/action';
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
	NotFound,
	UserPage,
	ProfileOrdersPage,
	FeedPage,
	FeedInfoPage,
	FeedInfoModalPage,
} from '../pages';
import { OnlyAuth, OnlyUnAuth } from '../components/protected-route';
import Loader from '../components/loader';
import style from './app.module.scss';

export const App = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();

	const state = location.state as { backgroundLocation?: Location };

	const dataRequest = useAppSelector(getDataRequestIngredients);
	const data = useAppSelector(getAllIngredients);

	useEffect(() => {
		dispatch(checkUserAuth());
		dispatch(getIngredients());
	}, [dispatch]);

	return (
		<>
			{!dataRequest && data.length > 0 ? (
				<div className={style.app}>
					<AppHeader />
					<Routes location={state?.backgroundLocation || location}>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/login'
							element={<OnlyUnAuth component={<LoginPage />} />}
						/>
						<Route
							path='/register'
							element={<OnlyUnAuth component={<RegisterPage />} />}
						/>
						<Route
							path='/forgot-password'
							element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
						/>
						<Route
							path='/reset-password'
							element={<OnlyUnAuth component={<ResetPasswordPage />} />}
						/>
						<Route
							path='/profile'
							element={<OnlyAuth component={<UserPage />} />}>
							<Route index element={<ProfilePage />} />
							<Route path='orders' element={<ProfileOrdersPage />} />
						</Route>
						<Route path='/ingredients/:id' element={<IngredientPage />} />
						<Route path='/feed' element={<FeedPage />} />
						<Route path='/feed/:number' element={<FeedInfoPage />} />
						<Route
							path='/profile/orders/:number'
							element={<OnlyAuth component={<FeedInfoPage />} />}
						/>
						<Route path='*' element={<NotFound />} />
					</Routes>

					{state?.backgroundLocation && (
						<Routes>
							<Route
								path='/ingredients/:id'
								element={<IngredientModalPage />}
							/>
							<Route path='/feed/:number' element={<FeedInfoModalPage />} />
							<Route path='/profile/orders/:number' element={<FeedInfoModalPage />} />
						</Routes>
					)}
				</div>
			) : (
				<Loader center />
			)}
		</>
	);
};
