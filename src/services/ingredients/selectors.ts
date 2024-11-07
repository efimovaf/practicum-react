import { createSelector } from 'reselect';
import { RootState } from '../../store/store';
import { filterDataByType } from '../../utils/filter-data';

export const getAllIngredients = (state: RootState) => state.ingredients.data;

export const getIngredientsByType = (filter: string) =>
	createSelector([getAllIngredients], (data) => {
		return data && data.length > 0 ? filterDataByType(data, filter) : [];
	});
