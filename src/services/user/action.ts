import { AppThunk } from '../../store/store';
import {
	authLoginApi,
	authLogoutApi,
	authRegisterApi,
	getAuthUserApi,
	updateAuthUserApi,
} from '../api-service';
import {
	IErrorResponse,
	ILoginRequest,
	IRegisterUserRequest,
	IUpdateUserRequest,
} from '../../interfaces/api';
import { IUser } from '../../interfaces/user';

export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';
export const SET_USER = 'SET_USER';

export const setAuthChecked = (payload: boolean) => ({
	type: SET_AUTH_CHECKED,
	payload: payload,
});

export const setUser = (user: IUser | undefined) => ({
	type: SET_USER,
	payload: user,
});

export const login = (formValue: ILoginRequest): AppThunk => {
	return (dispatch) => {
		authLoginApi(formValue)
			.then((result) => {
				dispatch(setUser(result.user));
				dispatch(setAuthChecked(true));
				localStorage.setItem('accessToken', result.accessToken);
				localStorage.setItem('refreshToken', result.refreshToken);
			})
			.catch((error: IErrorResponse) =>
				console.log(`Error login: ${error.message}`)
			);
	};
};

export const checkUserAuth = (): AppThunk => {
	return (dispatch) => {
		if (localStorage.getItem('accessToken')) {
			getAuthUserApi()
				.then((result) => dispatch(setUser(result.user)))
				.finally(() => dispatch(setAuthChecked(true)));
		} else {
			dispatch(setAuthChecked(true));
		}
	};
};

export const logout = (): AppThunk => {
	return (dispatch) => {
		authLogoutApi().then((result) => {
			if (result.success) {
				dispatch(setUser(undefined));
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
			}
		});
	};
};

export const register = (formValue: IRegisterUserRequest): AppThunk => {
	return (dispatch) => {
		authRegisterApi(formValue)
			.then((result) => {
				dispatch(setUser(result.user));
				dispatch(setAuthChecked(true));
				localStorage.setItem('accessToken', result.accessToken);
				localStorage.setItem('refreshToken', result.refreshToken);
			})
			.catch((error: IErrorResponse) =>
				console.log(`Error register: ${error.message}`)
			);
	};
};

export const updateUserAuth = (formValue: IUpdateUserRequest): AppThunk => {
	return (dispatch) => {
		if (localStorage.getItem('accessToken')) {
			updateAuthUserApi(formValue)
				.then((result) => dispatch(setUser(result.user)))
				.finally(() => dispatch(setAuthChecked(true)));
		} else {
			dispatch(setAuthChecked(true));
		}
	};
};
