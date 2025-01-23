import { SET_AUTH_CHECKED, SET_USER } from './action';
import { IUser } from '../../interfaces/user';

interface IUserState {
	user: IUser | undefined;
	isAuthChecked: boolean;
}

interface ISetAuthCheckedAction {
	type: typeof SET_AUTH_CHECKED;
	payload: boolean;
}

interface ISetUserAction {
	type: typeof SET_USER;
	payload: IUser;
}

export type IUserAction = ISetAuthCheckedAction | ISetUserAction;

export const initialState: IUserState = {
	user: undefined,
	isAuthChecked: false,
};

export const userReducer = (state = initialState, action: IUserAction) => {
	switch (action.type) {
		case SET_AUTH_CHECKED: {
			return {
				...state,
				isAuthChecked: action.payload,
			};
		}
		case SET_USER: {
			return {
				...state,
				user: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
