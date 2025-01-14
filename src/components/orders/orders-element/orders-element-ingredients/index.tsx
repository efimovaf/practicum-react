import React from 'react';
import OrdersElementImage from '../orders-element-image';
import { useAppSelector } from '../../../../hooks/store';
import { getAllIngredientsMap } from '../../../../services/ingredients/selectors';
import { v4 as uuidv4 } from 'uuid';
import style from './orders-element-ingredients.module.scss';

interface IOrdersElementIngredients {
	ingredients: string[];
}

const OrdersElementIngredients: React.FC<IOrdersElementIngredients> = ({
	ingredients,
}) => {
	const ingredientsMap = useAppSelector(getAllIngredientsMap);
	const count = ingredients.length;

	const firstFiveIngredients = ingredients.slice(0, 5);

	const getStyle = (index: number) => {
		const left = `-${index * 20}px`;
		const zIndex = 100 - index;

		return { left, zIndex };
	};

	return (
		<div className={style.ingredients}>
			{firstFiveIngredients.map((it, index) => {
				const element = ingredientsMap[it];

				return (
					<OrdersElementImage
						key={uuidv4()}
						element={element}
						styleCircle={getStyle(index)}
					/>
				);
			})}
			{count > 5 ? (
				<OrdersElementImage count={count - 5} styleCircle={getStyle(5)} />
			) : null}
		</div>
	);
};

export default OrdersElementIngredients;
