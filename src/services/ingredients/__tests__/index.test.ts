import {
	ingredientsReducer,
	IIngredientsAction,
	initialState,
} from '../reducer';
import {
	GET_INGREDIENTS_FAILED,
	GET_INGREDIENTS_LOADING,
	GET_INGREDIENTS_SUCCESS,
} from '../action';
import { IIngredient } from '../../../interfaces/ingredient';

const item1: IIngredient = {
	_id: '643d69a5c3f7b9001cfa0945',
	name: 'Соус с шипами Антарианского плоскоходца',
	type: 'sauce',
	proteins: 101,
	fat: 99,
	carbohydrates: 100,
	calories: 100,
	price: 88,
	image: 'sauce-01.png',
	image_mobile: 'sauce-01-mobile.png',
	image_large: 'sauce-01-large.png',
	__v: 0,
};

const item2: IIngredient = {
	_id: '643d69a5c3f7b9001cfa093e',
	name: 'Филе Люминесцентного тетраодонтимформа',
	type: 'main',
	proteins: 44,
	fat: 26,
	carbohydrates: 85,
	calories: 643,
	price: 988,
	image: 'meat-03.png',
	image_mobile: 'meat-03-mobile.png',
	image_large: 'meat-03-large.png',
	__v: 0,
};

describe('ingredients reducer', () => {
	it('should return the initial state', () => {
		expect(ingredientsReducer(undefined, {} as IIngredientsAction)).toEqual(
			initialState
		);
	});

	it('should return ingredients loading', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_LOADING,
			})
		).toEqual({ ...initialState, dataRequest: true, dataFailed: false });
	});

	it('should return ingredients success', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_SUCCESS,
				payload: [item1, item2],
			})
		).toEqual({ ...initialState, data: [item1, item2], dataRequest: false });
	});

	it('should return ingredients failed', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_FAILED,
				payload: 'Error',
			})
		).toEqual({
			...initialState,
			error: 'Error',
			dataFailed: true,
			dataRequest: false,
		});
	});
});
