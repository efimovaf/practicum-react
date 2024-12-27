import { applyMiddleware, createStore, UnknownAction } from 'redux';
import { thunk, ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '../services/reducers/root-reducer';
import { socketMiddleware } from '../services/middleware';
import { TWsExternalFeedActions, wsFeedActions } from '../services/orders/action';
import { TWsExternalProfileActions, wsProfileActions } from '../services/profile-orders/action';
import { IDataIOrders } from '../interfaces/feed';
import { TWsInternalFeedActions } from '../services/orders/slice';
import { TWsInternalProfileActions } from '../services/profile-orders/slice';
import { IOrderAction } from '../services/order/reducer';
import { IIngredientsAction } from '../services/ingredients/reducer';
import { IUserAction } from '../services/user/reducer';
import { IConstructorIngredientsAction } from '../services/constructor-ingredients/reducer';

const enhancer = composeWithDevTools(
	applyMiddleware(
		thunk,
		socketMiddleware<string, IDataIOrders>(wsFeedActions),
		socketMiddleware<string, IDataIOrders>(wsProfileActions, true)
	)
);

export const store = createStore(rootReducer, {}, enhancer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppActions =
	| TWsExternalFeedActions
	| TWsInternalFeedActions
	| TWsExternalProfileActions
	| TWsInternalProfileActions
	| IOrderAction
	| IIngredientsAction
	| IUserAction
	| IConstructorIngredientsAction;

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	UnknownAction
>;
