import { DATA_URL } from '../../constant/system';
import { AppThunk } from '../../store/store';
import { IIngredient } from '../../interfaces/ingredient';

export const GET_INGREDIENTS_LOADING = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = (): AppThunk => {
	return (dispatch) => {
		dispatch({
			type: GET_INGREDIENTS_LOADING,
		});
		fetch(DATA_URL)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					dispatch({
						type: GET_INGREDIENTS_FAILED,
						payload: 'Network response was not ok',
					});
				}
			})
			.then((result) => {
				if (result.success) {
					dispatch({
						type: GET_INGREDIENTS_SUCCESS,
						payload: result.data as IIngredient[],
					});
				} else {
					dispatch({
						type: GET_INGREDIENTS_FAILED,
						payload: 'Result data was not success',
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: GET_INGREDIENTS_FAILED,
					payload: `There has been a problem with your fetch operation: ${error}`,
				});
			});
	};
};
