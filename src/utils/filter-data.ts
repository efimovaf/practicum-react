import { IIngredient } from '../interfaces/ingredient';

export const filterDataByType = (data: IIngredient[], type: string) => {
	return data.filter((it) => it.type === type);
};

export const findIngredient = (allIngredients: IIngredient[], id: string) =>
	allIngredients.find((element) => element._id === id);
