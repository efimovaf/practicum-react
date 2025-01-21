import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebsocketStatus } from '../../interfaces/socket';
import { IDataIOrders } from '../../interfaces/feed';

interface IProfileOrdersState {
	status: WebsocketStatus;
	profileOrders: IDataIOrders;
	connectionError: string | null;
}

export const initialState: IProfileOrdersState = {
	status: WebsocketStatus.OFFLINE,
	profileOrders: {
		orders: [],
		total: 0,
		totalToday: 0,
	},
	connectionError: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		wsConnecting: (state) => {
			state.status = WebsocketStatus.CONNECTING;
		},
		wsOpen: (state) => {
			state.status = WebsocketStatus.ONLINE;
			state.connectionError = null;
		},
		wsClose: (state) => {
			state.status = WebsocketStatus.OFFLINE;
		},
		wsError: (state, action: PayloadAction<string>) => {
			state.connectionError = action.payload;
		},
		wsMessage: (state, action: PayloadAction<IDataIOrders>) => {
			state.profileOrders = action.payload;
		},
	},
	selectors: {
		getDataProfileOrders: (state): IDataIOrders => state.profileOrders,
	},
});

export const { wsConnecting, wsOpen, wsClose, wsError, wsMessage } =
	profileSlice.actions;
export const { getDataProfileOrders } = profileSlice.selectors;

export type TWsInternalProfileActions = ReturnType<
	(typeof profileSlice.actions)[keyof typeof profileSlice.actions]
>;
