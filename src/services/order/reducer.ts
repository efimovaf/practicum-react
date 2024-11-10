import {
	ORDER_CLEAR,
	ORDER_FAILED,
	ORDER_LOADING,
	ORDER_SUCCESS,
} from './action';

export interface IOrder {
	number: number;
}

export interface IOrderState {
	order: IOrder | undefined;
	orderRequest: boolean;
	orderFailed: boolean;
	error: string | undefined;
}

interface ILoadingOrderAction {
	type: typeof ORDER_LOADING;
}

interface ISuccessOrderAction {
	type: typeof ORDER_SUCCESS;
	payload: IOrder;
}

interface IFailedOrderAction {
	type: typeof ORDER_FAILED;
	payload: string;
}

interface IClearOrderAction {
	type: typeof ORDER_CLEAR;
}

type IOrderAction =
	| ILoadingOrderAction
	| ISuccessOrderAction
	| IFailedOrderAction
	| IClearOrderAction;

const initialState: IOrderState = {
	order: undefined,
	orderRequest: false,
	orderFailed: false,
	error: undefined,
};

export const orderReducer = (state = initialState, action: IOrderAction) => {
	switch (action.type) {
		case ORDER_LOADING: {
			return {
				...state,
				orderRequest: true,
				orderFailed: false,
			};
		}
		case ORDER_SUCCESS: {
			return {
				...state,
				order: action.payload,
				orderRequest: false,
			};
		}
		case ORDER_FAILED: {
			return {
				...state,
				orderFailed: true,
				orderRequest: false,
				error: action.payload,
			};
		}
		case ORDER_CLEAR: {
			return {
				...state,
				orderFailed: false,
				orderRequest: false,
				error: undefined,
				order: undefined,
			};
		}
		default: {
			return state;
		}
	}
};
