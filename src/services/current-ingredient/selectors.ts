import { RootState } from '../../store/store';

export const getCurrentIngredient = (state: RootState) =>
	state.currentIngredient.ingredient;
