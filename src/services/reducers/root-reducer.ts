import { combineReducers } from 'redux';
import { ingredientsReducer } from '../ingredients/reducer';
import { constructorIngredientsReducer } from '../constructor-ingredients/reducer';
import { orderReducer } from '../order/reducer';
import { userReducer } from '../user/reducer';

export const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	constructorIngredients: constructorIngredientsReducer,
	order: orderReducer,
	user: userReducer,
});
