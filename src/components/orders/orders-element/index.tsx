import React, { useMemo } from 'react';
import {
	CurrencyIcon,
	FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrdersElementIngredients from './orders-element-ingredients';
import { IOrder } from '../../../interfaces/order';
import { useAppSelector } from '../../../hooks/store';
import { getAllIngredientsMap } from '../../../services/ingredients/selectors';
import style from './orders-element.module.scss';

interface IOrdersElement {
	order: IOrder;
	showStatus?: boolean;
}

const OrdersElement: React.FC<IOrdersElement> = ({ order, showStatus }) => {
	const ingredientsMap = useAppSelector(getAllIngredientsMap);

	const total = useMemo(
		() =>
			order.ingredients.reduce((sum, element) => {
				if (element) {
					const findElement = ingredientsMap[element];
					return (findElement ? findElement.price : 0) + sum;
				} else {
					return 0;
				}
			}, 0),
		[ingredientsMap, order.ingredients]
	);

	return (
		<div className={style.main}>
			<div className={style.orderId}>
				<p className='text text_type_digits-default'>{`#${order.number}`}</p>
				<FormattedDate
					className='text text_type_main-default text_color_inactive'
					date={new Date(order.updatedAt)}
				/>
			</div>
			<div className={style.info}>
				<p className='text text_type_main-medium'>{order.name}</p>
				{showStatus && <p className={style.status}>{order.status}</p>}
			</div>
			<div className={style.components}>
				<OrdersElementIngredients ingredients={order.ingredients} />
				<div className={style.total}>
					<p className='text text_type_digits-default'>{total}</p>
					<CurrencyIcon className={style.totalIcon} type='primary' />
				</div>
			</div>
		</div>
	);
};

export default OrdersElement;
