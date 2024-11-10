import { RootState } from '../../store/store';

export const getBun = (state: RootState) => state.constructorIngredients.bun;

export const getConstructorIngredients = (state: RootState) =>
	state.constructorIngredients.ingredients;
