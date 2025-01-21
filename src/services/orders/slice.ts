import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebsocketStatus } from '../../interfaces/socket';
import { IDataIOrders } from '../../interfaces/feed';

interface IFeedState {
	status: WebsocketStatus;
	dataOrders: IDataIOrders;
	connectionError: string | null;
}

export const initialState: IFeedState = {
	status: WebsocketStatus.OFFLINE,
	dataOrders: {
		orders: [],
		total: 0,
		totalToday: 0,
	},
	connectionError: null,
};

export const feedSlice = createSlice({
	name: 'feed',
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
			state.dataOrders = action.payload;
		},
	},
	selectors: {
		getDataOrders: (state): IDataIOrders => state.dataOrders,
	},
});

export const { wsConnecting, wsOpen, wsClose, wsError, wsMessage } =
	feedSlice.actions;
export const { getDataOrders } = feedSlice.selectors;

export type TWsInternalFeedActions = ReturnType<
	(typeof feedSlice.actions)[keyof typeof feedSlice.actions]
>;
