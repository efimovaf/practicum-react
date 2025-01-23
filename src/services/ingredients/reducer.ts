import {
	GET_INGREDIENTS_LOADING,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED,
} from './action';
import { IIngredient } from '../../interfaces/ingredient';

interface IIngredientsState {
	data: IIngredient[];
	dataRequest: boolean;
	dataFailed: boolean;
	error: string | undefined;
}

interface ILoadingIngredientsAction {
	type: typeof GET_INGREDIENTS_LOADING;
}

interface ISuccessIngredientsAction {
	type: typeof GET_INGREDIENTS_SUCCESS;
	payload: IIngredient[];
}

interface IFailedIngredientsAction {
	type: typeof GET_INGREDIENTS_FAILED;
	payload: string;
}

export type IIngredientsAction =
	| ILoadingIngredientsAction
	| ISuccessIngredientsAction
	| IFailedIngredientsAction;

export const initialState: IIngredientsState = {
	data: [],
	dataRequest: false,
	dataFailed: false,
	error: undefined,
};

export const ingredientsReducer = (
	state = initialState,
	action: IIngredientsAction
) => {
	switch (action.type) {
		case GET_INGREDIENTS_LOADING: {
			return {
				...state,
				dataRequest: true,
				dataFailed: false,
			};
		}
		case GET_INGREDIENTS_SUCCESS: {
			return {
				...state,
				data: action.payload,
				dataRequest: false,
			};
		}
		case GET_INGREDIENTS_FAILED: {
			return {
				...state,
				dataFailed: true,
				dataRequest: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
