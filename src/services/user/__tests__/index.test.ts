import { userReducer, IUserAction, initialState } from '../reducer';
import { SET_AUTH_CHECKED, SET_USER } from '../action';
import { IUser } from '../../../interfaces/user';

const user: IUser = {
	name: 'Popov Ivan',
	email: 'popov@mail.ru',
};

describe('user reducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {} as IUserAction)).toEqual(initialState);
	});

	it('should return set auth checked', () => {
		expect(
			userReducer(initialState, {
				type: SET_AUTH_CHECKED,
				payload: true,
			})
		).toEqual({ ...initialState, isAuthChecked: true });
	});

	it('should return set user', () => {
		expect(
			userReducer(initialState, {
				type: SET_USER,
				payload: user,
			})
		).toEqual({ ...initialState, user });
	});
});
