import { AppDispatch, AppThunk } from '../../store/store';
import { getOrderApi } from '../api-service';
import { IOrder } from '../../interfaces/order';

export const ORDER_LOADING = 'ORDER_LOADING';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const ORDER_CLEAR = 'ORDER_CLEAR';

const addSuccess = (payload: IOrder) => ({
	type: ORDER_SUCCESS,
	payload,
});

const addFailed = (payload: string) => ({
	type: ORDER_FAILED,
	payload,
});

export const getOrder = (param: string[]): AppThunk => {
	return (dispatch) => {
		dispatch({
			type: ORDER_LOADING,
		});
		getOrderApi(param)
			.then((result) => {
				if (result.success) {
					dispatch(addSuccess(result.order));
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

export const clearOrder = () => (dispatch: AppDispatch) => {
	dispatch({
		type: ORDER_CLEAR,
	});
};
