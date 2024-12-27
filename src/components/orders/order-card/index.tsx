import React, { useEffect, useMemo } from 'react';
import { Gap } from '../../ui/gap';
import OrdersElementImage from '../orders-element/orders-element-image';
import {
	CurrencyIcon,
	FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import Loader from '../../loader';
import { getStatusColor, getStatusText } from '../../../utils/order';
import { getAllIngredientsMap } from '../../../services/ingredients/selectors';
import { IIngredientWithCount } from '../../../interfaces/ingredient';
import { getOrderByNumber } from '../../../services/order/action';
import style from './order-card.module.scss';

const OrderCard: React.FC = () => {
	const { number } = useParams();
	const dispatch = useAppDispatch();
	const ingredientsMap = useAppSelector(getAllIngredientsMap);

	const order = useAppSelector((state) => {
		let order = state.feed.dataOrders.orders.find(
			(it) => it.number === +(number as unknown as number)
		);

		if (order) return order;

		order = state.profile.profileOrders.orders.find(
			(it) => it.number === +(number as unknown as number)
		);

		if (order) return order;

		return state.order.order ?? state.order.orderByNumber;
	});

	useEffect(() => {
		if (!order && number) {
			dispatch(getOrderByNumber(number));
		}
	}, [dispatch, number, order]);

	const ingredientsRes = useMemo(() => {
		const ingredients: IIngredientWithCount[] = [];
		order?.ingredients.forEach((it) => {
			const findIngredient = ingredientsMap[it];
			const findElement = ingredients.find((el) => el._id === it);

			if (findElement) findElement._count += 1;
			else ingredients.push({ ...findIngredient, _count: 1 });
		});

		return ingredients;
	}, [ingredientsMap, order?.ingredients]);

	const total = useMemo(
		() =>
			ingredientsRes.reduce((sum, it) => {
				return sum + it.price * it._count;
			}, 0),
		[ingredientsRes]
	);

	return (
		<>
			{order ? (
				<div className={style.card}>
					<p className={style.orderId}>{`#${order.number}`}</p>
					<Gap size={10} />
					<div className={style.info}>
						<p className='text text_type_main-medium'>{order.name}</p>
						<p
							className={style.status}
							style={{ color: getStatusColor(order.status) }}>
							{getStatusText(order.status)}
						</p>
					</div>
					<Gap size={15} />
					<div className={style.ingredients}>
						<p className='text text_type_main-medium'>Состав:</p>
						<div className={style.ingredientsList}>
							{ingredientsRes.map((it) => (
								<div key={it._id} className={style.ingredient}>
									<div className={style.ingredientLeft}>
										<OrdersElementImage element={it} />
										<p
											className='text text_type_main-default'
											style={{ width: '320px' }}>
											{it.name}
										</p>
									</div>
									<div className={style.price}>
										<p className='text text_type_digits-default'>{`${it._count} x ${it.price}`}</p>
										<CurrencyIcon className={style.totalIcon} type='primary' />
									</div>
								</div>
							))}
						</div>
					</div>
					<Gap size={10} />
					<div className={style.footer}>
						<FormattedDate
							className='text text_type_main-default text_color_inactive'
							date={new Date(order.updatedAt)}
						/>
						<div className={style.total}>
							<p className='text text_type_digits-default'>{total}</p>
							<CurrencyIcon className={style.totalIcon} type='primary' />
						</div>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default OrderCard;
