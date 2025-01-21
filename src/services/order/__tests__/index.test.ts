import { orderReducer, IOrderAction, initialState } from '../reducer';
import {
	ORDER_CLEAR,
	ORDER_FAILED,
	ORDER_GET_BY_NUMBER,
	ORDER_LOADING,
	ORDER_SUCCESS,
} from '../action';
import { IOrder } from '../../../interfaces/order';

const order: IOrder = {
	_id: '67891c53133acd001be4a9df',
	status: 'done',
	name: 'Флюоресцентный spicy метеоритный бургер',
	createdAt: '2025-01-16T14:48:51.753Z',
	updatedAt: '2025-01-16T14:48:52.323Z',
	number: 65683,
	ingredients: [
		'643d69a5c3f7b9001cfa093c',
		'643d69a5c3f7b9001cfa093e',
		'643d69a5c3f7b9001cfa093c',
	],
};

describe('order reducer', () => {
	it('should return the initial state', () => {
		expect(orderReducer(undefined, {} as IOrderAction)).toEqual(initialState);
	});

	it('should return order loading', () => {
		expect(
			orderReducer(initialState, {
				type: ORDER_LOADING,
			})
		).toEqual({ ...initialState, orderRequest: true, orderFailed: false });
	});

	it('should return order success', () => {
		expect(
			orderReducer(initialState, {
				type: ORDER_SUCCESS,
				payload: order,
			})
		).toEqual({ ...initialState, order, orderRequest: false });
	});

	it('should return order failed', () => {
		expect(
			orderReducer(initialState, {
				type: ORDER_FAILED,
				payload: 'Error',
			})
		).toEqual({
			...initialState,
			error: 'Error',
			orderFailed: true,
			orderRequest: false,
		});
	});

	it('should return order clear', () => {
		expect(
			orderReducer(initialState, {
				type: ORDER_CLEAR,
			})
		).toEqual(initialState);
	});

	it('should return order get by number', () => {
		expect(
			orderReducer(initialState, {
				type: ORDER_GET_BY_NUMBER,
				payload: order,
			})
		).toEqual({ ...initialState, orderByNumber: order, orderRequest: false });
	});
});
