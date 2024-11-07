import { IIngredient } from '../../interfaces/ingredient';
import { AppDispatch } from '../../store/store';

export const ADD_CURRENT_INGREDIENT = 'ADD_CURRENT_INGREDIENT';
export const DELETE_CURRENT_INGREDIENT = 'DELETE_CURRENT_INGREDIENT';

export const addIngredient = (item: IIngredient) => (dispatch: AppDispatch) => {
	dispatch({
		type: ADD_CURRENT_INGREDIENT,
		payload: item,
	});
};

export const deleteIngredient = () => (dispatch: AppDispatch) => {
	dispatch({
		type: DELETE_CURRENT_INGREDIENT,
		payload: undefined,
	});
};
