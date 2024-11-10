import { ADD_CURRENT_INGREDIENT, DELETE_CURRENT_INGREDIENT } from './action';
import { IIngredient } from '../../interfaces/ingredient';

interface ICurrentIngredientState {
	ingredient: IIngredient | undefined;
}

interface IAddCurrentIngredientAction {
	type: typeof ADD_CURRENT_INGREDIENT;
	payload: IIngredient;
}

interface IDeleteCurrentIngredientAction {
	type: typeof DELETE_CURRENT_INGREDIENT;
	payload: undefined;
}

type ICurrentIngredientAction =
	| IAddCurrentIngredientAction
	| IDeleteCurrentIngredientAction;

const initialState: ICurrentIngredientState = {
	ingredient: undefined,
};

export const currentIngredientReducer = (
	state = initialState,
	action: ICurrentIngredientAction
) => {
	switch (action.type) {
		case ADD_CURRENT_INGREDIENT: {
			return {
				...state,
				ingredient: action.payload,
			};
		}
		case DELETE_CURRENT_INGREDIENT: {
			return {
				...state,
				ingredient: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
