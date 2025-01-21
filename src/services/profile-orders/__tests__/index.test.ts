import {
	profileSlice,
	initialState,
	TWsInternalProfileActions,
	wsClose,
	wsConnecting,
	wsError,
	wsMessage,
	wsOpen,
} from '../slice';
import { IDataIOrders } from '../../../interfaces/feed';

const orders: IDataIOrders = {
	orders: [
		{
			_id: '678a81cc133acd001be4aed0',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa093c',
			],
			status: 'done',
			name: 'Краторный био-марсианский бургер',
			createdAt: '2025-01-17T16:14:04.345Z',
			updatedAt: '2025-01-17T16:14:04.984Z',
			number: 65840,
		},
		{
			_id: '678a81ba133acd001be4aecf',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa093e',
				'643d69a5c3f7b9001cfa0941',
			],
			status: 'done',
			name: 'Краторный био-марсианский люминесцентный бургер',
			createdAt: '2025-01-17T16:13:46.132Z',
			updatedAt: '2025-01-17T16:13:46.758Z',
			number: 65839,
		},
		{
			_id: '678a816b133acd001be4aecb',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa093e',
				'643d69a5c3f7b9001cfa0941',
			],
			status: 'done',
			name: 'Краторный био-марсианский люминесцентный бургер',
			createdAt: '2025-01-17T16:12:27.429Z',
			updatedAt: '2025-01-17T16:12:28.094Z',
			number: 65836,
		},
	],
	total: 65466,
	totalToday: 141,
};

describe('profile slice', () => {
	it('should return the initial state', () => {
		expect(
			profileSlice.reducer(undefined, {} as TWsInternalProfileActions)
		).toEqual(initialState);
	});

	it('should return status CONNECTING', () => {
		expect(profileSlice.reducer(initialState, wsConnecting())).toEqual({
			...initialState,
			status: 'CONNECTING',
		});
	});

	it('should return status ONLINE', () => {
		expect(profileSlice.reducer(initialState, wsOpen())).toEqual({
			...initialState,
			status: 'ONLINE',
		});
	});

	it('should return status OFFLINE', () => {
		expect(profileSlice.reducer(initialState, wsClose())).toEqual({
			...initialState,
			status: 'OFFLINE',
		});
	});

	it('should return connection error', () => {
		expect(profileSlice.reducer(initialState, wsError('Error'))).toEqual({
			...initialState,
			connectionError: 'Error',
		});
	});

	it('should return profile orders', () => {
		expect(profileSlice.reducer(initialState, wsMessage(orders))).toEqual({
			...initialState,
			profileOrders: orders,
		});
	});
});
