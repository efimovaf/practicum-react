import { DATA_URL, ORDER_URL } from '../constant/system';

const getResponse = (response: Response) =>
	response.ok
		? response.json()
		: response.json().then((error) => Promise.reject(error));

export const getIngredientsApi = () =>
	fetch(DATA_URL).then((response) => getResponse(response));

export const getOrderApi = (param: string[]) =>
	fetch(ORDER_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		} as HeadersInit,
		body: JSON.stringify({
			ingredients: param,
		}),
	}).then((response) => getResponse(response));
