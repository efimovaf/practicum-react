import { AppDispatch, AppThunk } from '../../store/store';
import { ORDER_URL } from '../../constant/system';

export const ORDER_LOADING = 'ORDER_LOADING';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const ORDER_CLEAR = 'ORDER_CLEAR';

export const getOrder = (param: string[]): AppThunk => {
	return (dispatch) => {
		dispatch({
			type: ORDER_LOADING,
		});
		fetch(ORDER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			} as HeadersInit,
			body: JSON.stringify({
				ingredients: param,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					dispatch({
						type: ORDER_FAILED,
						payload: 'Network response was not ok',
					});
				}
			})
			.then((result) => {
				if (result.success) {
					dispatch({
						type: ORDER_SUCCESS,
						payload: result.order,
					});
				} else {
					dispatch({
						type: ORDER_FAILED,
						payload: 'Result data was not success',
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: ORDER_FAILED,
					payload: `There has been a problem with your fetch operation: ${error}`,
				});
			});
	};
};

export const clearOrder = () => (dispatch: AppDispatch) => {
	dispatch({
		type: ORDER_CLEAR,
	});
};
