import {
	constructorIngredientsReducer,
	IConstructorIngredientsAction,
	initialState,
} from '../reducer';
import {
	IIngredient,
	IIngredientWithKey,
} from '../../../interfaces/ingredient';
import {
	ADD_CONSTRUCTOR_INGREDIENTS_BUN,
	ADD_CONSTRUCTOR_INGREDIENTS_ITEM,
	CLEAR_CONSTRUCTOR_INGREDIENTS,
	DELETE_CONSTRUCTOR_INGREDIENTS_ITEM,
	SORT_CONSTRUCTOR_INGREDIENTS,
} from '../action';

const bun: IIngredient = {
	_id: '643d69a5c3f7b9001cfa093c',
	name: 'Краторная булка N-200i',
	type: 'bun',
	proteins: 80,
	fat: 24,
	carbohydrates: 53,
	calories: 420,
	price: 1255,
	image: 'bun-02.png',
	image_mobile: 'bun-02-mobile.png',
	image_large: 'bun-02-large.png',
	__v: 0,
};

const item: IIngredient = {
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

const item1WithKey: IIngredientWithKey = {
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
	_key: '6654dff',
	index: 0,
};

const item2WithKey: IIngredientWithKey = {
	_id: '643d69a5c3f7b9001cfa0947',
	name: 'Плоды Фалленианского дерева',
	type: 'main',
	proteins: 20,
	fat: 5,
	carbohydrates: 55,
	calories: 77,
	price: 874,
	image: 'sp_1.png',
	image_mobile: 'sp_1-mobile.png',
	image_large: 'sp_1-large.png',
	__v: 0,
	_key: 'a51fa688',
	index: 0,
};

describe('constructor-ingredients reducer', () => {
	it('should return the initial state', () => {
		expect(
			constructorIngredientsReducer(
				undefined,
				{} as IConstructorIngredientsAction
			)
		).toEqual(initialState);
	});

	it('should return add bun in constructor', () => {
		expect(
			constructorIngredientsReducer(initialState, {
				type: ADD_CONSTRUCTOR_INGREDIENTS_BUN,
				payload: bun,
			})
		).toEqual({ ...initialState, bun });
	});

	it('should return add ingredient in constructor', () => {
		const _key = 'sd54sdf';
		const resItem: IIngredientWithKey = { ...item, _key, index: 0 };

		expect(
			constructorIngredientsReducer(
				{ ...initialState, bun },
				{
					type: ADD_CONSTRUCTOR_INGREDIENTS_ITEM,
					payload: resItem,
				}
			)
		).toEqual({ ...initialState, bun, ingredients: [resItem] });
	});

	it('should return delete ingredient from constructor', () => {
		expect(
			constructorIngredientsReducer(
				{ ...initialState, bun, ingredients: [item1WithKey, item2WithKey] },
				{
					type: DELETE_CONSTRUCTOR_INGREDIENTS_ITEM,
					payload: item1WithKey,
				}
			)
		).toEqual({ ...initialState, bun, ingredients: [item2WithKey] });
	});

	it('should return clear constructor', () => {
		expect(
			constructorIngredientsReducer(
				{ ...initialState, bun, ingredients: [item1WithKey, item2WithKey] },
				{
					type: CLEAR_CONSTRUCTOR_INGREDIENTS,
					payload: [],
				}
			)
		).toEqual(initialState);
	});

	it('should return sort ingredients in constructor', () => {
		expect(
			constructorIngredientsReducer(
				{ ...initialState, bun, ingredients: [item1WithKey, item2WithKey] },
				{
					type: SORT_CONSTRUCTOR_INGREDIENTS,
					payload: [item2WithKey, item1WithKey],
				}
			)
		).toEqual({
			...initialState,
			bun,
			ingredients: [item2WithKey, item1WithKey],
		});
	});
});
