import { AppThunk } from '../../store/store';
import { IIngredient } from '../../interfaces/ingredient';
import { getIngredientsApi } from '../api-service';

export const GET_INGREDIENTS_LOADING = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

const addSuccess = (payload: IIngredient[]) => ({
	type: GET_INGREDIENTS_SUCCESS,
	payload,
});

const addFailed = (payload: string) => ({
	type: GET_INGREDIENTS_FAILED,
	payload,
});

export const getIngredients = (): AppThunk => {
	return (dispatch) => {
		dispatch({
			type: GET_INGREDIENTS_LOADING,
		});
		getIngredientsApi()
			.then((result) => {
				if (result.success) {
					dispatch(addSuccess(result.data as IIngredient[]));
				}

				return Promise.reject(result);
			})
			.catch((error) => {
				dispatch(
					addFailed(
						`There has been a problem with your fetch operation: ${error}`
					)
				);
			});
	};
};
