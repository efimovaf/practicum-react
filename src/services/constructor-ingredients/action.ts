import { IIngredient, IIngredientWithKey } from '../../interfaces/ingredient';
import { AppDispatch } from '../../store/store';
import { v4 as uuidv4 } from 'uuid';

export const ADD_CONSTRUCTOR_INGREDIENTS_BUN =
	'ADD_CONSTRUCTOR_INGREDIENTS_BUN';
export const ADD_CONSTRUCTOR_INGREDIENTS_ITEM =
	'ADD_CONSTRUCTOR_INGREDIENTS_ITEM';
export const DELETE_CONSTRUCTOR_INGREDIENTS_ITEM =
	'DELETE_CONSTRUCTOR_INGREDIENTS_ITEM';
export const CLEAR_CONSTRUCTOR_INGREDIENTS = 'CLEAR_CONSTRUCTOR_INGREDIENTS';
export const SORT_CONSTRUCTOR_INGREDIENTS = 'SORT_CONSTRUCTOR_INGREDIENTS';

export const addConstructorBun =
	(item: IIngredient) => (dispatch: AppDispatch) => {
		dispatch({
			type: ADD_CONSTRUCTOR_INGREDIENTS_BUN,
			payload: item,
		});
	};

export const addConstructorItem =
	(item: IIngredient) => (dispatch: AppDispatch) => {
		dispatch({
			type: ADD_CONSTRUCTOR_INGREDIENTS_ITEM,
			payload: { ...item, _key: uuidv4() },
		});
	};

export const deleteConstructorItem =
	(item: IIngredientWithKey) => (dispatch: AppDispatch) => {
		dispatch({
			type: DELETE_CONSTRUCTOR_INGREDIENTS_ITEM,
			payload: item,
		});
	};

export const clearConstructorIngredients = () => (dispatch: AppDispatch) => {
	dispatch({
		type: CLEAR_CONSTRUCTOR_INGREDIENTS,
		payload: [],
	});
};

export const sortConstructorIngredients =
	(newIngredients: IIngredientWithKey[]) => (dispatch: AppDispatch) => {
		dispatch({
			type: SORT_CONSTRUCTOR_INGREDIENTS,
			payload: newIngredients,
		});
	};
