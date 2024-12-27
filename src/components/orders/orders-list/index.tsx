import React from 'react';
import OrdersElement from '../orders-element';
import { IOrder } from '../../../interfaces/order';
import { Link, useLocation } from 'react-router-dom';
import style from './orders-list.module.scss';

interface IOrdersList {
	orders: IOrder[];
	styleList?: React.CSSProperties;
}

const OrdersList: React.FC<IOrdersList> = ({ orders, styleList }) => {
	const location = useLocation();

	return (
		<div className={style.list} style={{ ...styleList }}>
			{orders.map((it) => (
				<Link
					key={it.number}
					to={`${location.pathname}/${it.number}`}
					state={{ backgroundLocation: location }}
					style={{ color: 'unset' }}>
					<OrdersElement order={it} />
				</Link>
			))}
		</div>
	);
};

export default OrdersList;
