import { IIngredient, IIngredientWithKey } from '../../interfaces/ingredient';
import {
	ADD_CONSTRUCTOR_INGREDIENTS_BUN,
	ADD_CONSTRUCTOR_INGREDIENTS_ITEM,
	DELETE_CONSTRUCTOR_INGREDIENTS_ITEM,
	CLEAR_CONSTRUCTOR_INGREDIENTS,
	SORT_CONSTRUCTOR_INGREDIENTS
} from './action';

interface IConstructorIngredientsState {
	bun: IIngredient | undefined;
	ingredients: IIngredientWithKey[];
}

interface IAddBunCurrentIngredientAction {
	type: typeof ADD_CONSTRUCTOR_INGREDIENTS_BUN;
	payload: IIngredient;
}

interface IAddItemCurrentIngredientAction {
	type: typeof ADD_CONSTRUCTOR_INGREDIENTS_ITEM;
	payload: IIngredientWithKey;
}

interface IDeleteItemCurrentIngredientAction {
	type: typeof DELETE_CONSTRUCTOR_INGREDIENTS_ITEM;
	payload: IIngredientWithKey;
}

interface IClearCurrentIngredientAction {
	type: typeof CLEAR_CONSTRUCTOR_INGREDIENTS;
	payload: IIngredientWithKey[];
}

interface ISortCurrentIngredientAction {
	type: typeof SORT_CONSTRUCTOR_INGREDIENTS;
	payload: IIngredientWithKey[];
}

type IConstructorIngredientsAction =
	| IAddBunCurrentIngredientAction
	| IAddItemCurrentIngredientAction
	| IDeleteItemCurrentIngredientAction
	| IClearCurrentIngredientAction
	| ISortCurrentIngredientAction;

const initialState: IConstructorIngredientsState = {
	bun: undefined,
	ingredients: [],
};

export const constructorIngredientsReducer = (
	state = initialState,
	action: IConstructorIngredientsAction
) => {
	switch (action.type) {
		case ADD_CONSTRUCTOR_INGREDIENTS_BUN: {
			return {
				...state,
				bun: action.payload,
			};
		}
		case ADD_CONSTRUCTOR_INGREDIENTS_ITEM: {
			return {
				...state,
				ingredients: [...state.ingredients, action.payload],
			};
		}
		case DELETE_CONSTRUCTOR_INGREDIENTS_ITEM: {
			return {
				...state,
				ingredients: state.ingredients.filter(
					(it) => it._key !== action.payload._key
				),
			};
		}
		case CLEAR_CONSTRUCTOR_INGREDIENTS: {
			return {
				...state,
				bun: undefined,
				ingredients: action.payload,
			};
		}
		case SORT_CONSTRUCTOR_INGREDIENTS: {
			return {
				...state,
				ingredients: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
