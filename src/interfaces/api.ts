import { IIngredient } from './ingredient';
import { IOrder } from './order';
import { IUser } from './user';

export type IServerResponse<T> = {
	success: boolean;
} & T;

export type IErrorResponse = IServerResponse<{
	message: string;
}>;

export type IIngredientsResponse = {
	data: IIngredient[];
};

export type IOrderResponse = {
	order: IOrder;
};

export type IRefreshTokenResponse = {
	accessToken: string;
	refreshToken: string;
};

export type IUserResponse = {
	user: IUser;
};

export type ILoginResponse = IUserResponse & IRefreshTokenResponse;

export type IRegisterResponse = ILoginResponse;

export type IUpdateUserRequest = {
	name: string;
	email: string;
	password: string;
};

export type ILoginRequest = {
	email: string;
	password: string;
};

export type IRegisterUserRequest = IUpdateUserRequest;
