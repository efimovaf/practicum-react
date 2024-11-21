import { RootState } from '../../store/store';

export const getIsAuthChecked = (state: RootState) => state.user.isAuthChecked;

export const getUser = (state: RootState) => state.user.user;
