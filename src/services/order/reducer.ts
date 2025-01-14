import {
	ORDER_CLEAR,
	ORDER_FAILED,
	ORDER_GET_BY_NUMBER,
	ORDER_LOADING,
	ORDER_SUCCESS,
} from './action';
import { IOrder } from '../../interfaces/order';

export interface IOrderState {
	order: IOrder | undefined;
	orderRequest: boolean;
	orderFailed: boolean;
	error: string | undefined;
	orderByNumber: IOrder | undefined;
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

interface IOrderByNumberAction {
	type: typeof ORDER_GET_BY_NUMBER;
	payload: IOrder;
}

export type IOrderAction =
	| ILoadingOrderAction
	| ISuccessOrderAction
	| IFailedOrderAction
	| IClearOrderAction
	| IOrderByNumberAction;

const initialState: IOrderState = {
	order: undefined,
	orderRequest: false,
	orderFailed: false,
	error: undefined,
	orderByNumber: undefined,
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
		case ORDER_GET_BY_NUMBER: {
			return {
				...state,
				orderByNumber: action.payload,
				orderRequest: false,
			};
		}
		default: {
			return state;
		}
	}
};
