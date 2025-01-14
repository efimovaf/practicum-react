import { createAction } from '@reduxjs/toolkit';
import { wsClose, wsConnecting, wsError, wsMessage, wsOpen } from './slice';

export const wsConnect = createAction<string, 'feed/connect'>('feed/connect');

export const wsDisconnect = createAction('feed/disconnect');

export const wsFeedActions = {
	connect: wsConnect,
	disconnect: wsDisconnect,
	onConnecting: wsConnecting,
	onOpen: wsOpen,
	onClose: wsClose,
	onError: wsError,
	onMessage: wsMessage,
};

export type TWsExternalFeedActions =
	| ReturnType<typeof wsConnect>
	| ReturnType<typeof wsDisconnect>;
