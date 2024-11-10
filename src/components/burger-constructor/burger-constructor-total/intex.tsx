import React, { useMemo } from 'react';
import {
	Button,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../modal';
import OrderDetails from './order-details';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { clearOrder, getOrder } from '../../../services/order/action';
import {
	getBun,
	getConstructorIngredients,
} from '../../../services/constructor-ingredients/selectors';
import { clearConstructorIngredients } from '../../../services/constructor-ingredients/action';
import { getDataOrder } from '../../../services/order/selectors';
import style from './burger-constructor-total.module.scss';

const BurgerConstructorTotal: React.FC = () => {
	const dispatch = useAppDispatch();
	const { orderRequest, order } = useAppSelector(getDataOrder);
	const bun = useAppSelector(getBun);
	const ingredients = useAppSelector(getConstructorIngredients);

	const total = useMemo(() => {
		const ingredientsTotal = ingredients.reduce((sum, it) => {
			return sum + it.price;
		}, 0);

		return ingredientsTotal + (bun ? bun.price * 2 : 0);
	}, [bun, ingredients]);

	const onClickOrder = () => {
		if (bun && ingredients) {
			const ingredientsIds = ingredients.map((it) => it._id);
			dispatch(getOrder([bun._id, ...ingredientsIds, bun._id]));
		}
	};

	const onClose = () => {
		dispatch(clearOrder());
		dispatch(clearConstructorIngredients());
	};

	return (
		<div className={style.main}>
			<div className={style.totalGroup}>
				<p className='text text_type_digits-medium'>{total}</p>
				<CurrencyIcon className={style.totalIcon} type='primary' />
			</div>
			<Button
				htmlType='button'
				type='primary'
				size='large'
				onClick={onClickOrder}>
				Оформить заказ
			</Button>

			{!orderRequest && order && (
				<Modal onClose={onClose}>
					<OrderDetails />
				</Modal>
			)}
		</div>
	);
};

export default BurgerConstructorTotal;
