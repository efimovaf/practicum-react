import { applyMiddleware, createStore, UnknownAction } from 'redux';
import { thunk, ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '../services/reducers/root-reducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, {}, enhancer);

export type AppStore = typeof store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	UnknownAction
>;
