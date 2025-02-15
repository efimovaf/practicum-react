import { createSelector } from 'reselect';
import { RootState } from '../../store/store';
import { filterDataByType, findIngredient } from '../../utils/filter-data';
import { IIngredient } from '../../interfaces/ingredient';

export const getAllIngredients = (state: RootState) => state.ingredients.data;

export const getIngredientsByType = (filter: string) =>
	createSelector([getAllIngredients], (data) => {
		return data && data.length > 0 ? filterDataByType(data, filter) : [];
	});

export const getDataRequestIngredients = (state: RootState) =>
	state.ingredients.dataRequest;

export const getIngredientById = (id?: string) =>
	createSelector([getAllIngredients], (data) => {
		return data && data.length > 0 && id ? findIngredient(data, id) : undefined;
	});

export const getAllIngredientsMap = (
	state: RootState
): Record<string, IIngredient> =>
	state.ingredients.data.reduce(
		(pre, item) => ({
			...pre,
			[item._id]: item,
		}),
		{}
	);
