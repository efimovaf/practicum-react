import { createAction } from '@reduxjs/toolkit';
import { wsClose, wsConnecting, wsError, wsMessage, wsOpen } from './slice';

export const wsConnect = createAction<string, 'profile/connect'>(
	'profile/connect'
);

export const wsDisconnect = createAction('profile/disconnect');

export const wsProfileActions = {
	connect: wsConnect,
	disconnect: wsDisconnect,
	onConnecting: wsConnecting,
	onOpen: wsOpen,
	onClose: wsClose,
	onError: wsError,
	onMessage: wsMessage,
};

export type TWsExternalProfileActions =
	| ReturnType<typeof wsConnect>
	| ReturnType<typeof wsDisconnect>;
