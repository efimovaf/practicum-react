import React, { useEffect } from 'react';
import OrdersList from '../../../components/orders/orders-list';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { getDataProfileOrders } from '../../../services/profile-orders/slice';
import { ORDERS } from '../../../constant/system';
import {
	wsConnect,
	wsDisconnect,
} from '../../../services/profile-orders/action';
import Loader from '../../../components/loader';
import style from '../../../components/orders/orders-feed/orders-feed.module.scss';

const ProfileOrdersPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const token = localStorage.getItem('accessToken');

	const profileOrders = useAppSelector(getDataProfileOrders);
	const orders = [...profileOrders.orders].sort(
		(a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
	);

	useEffect(() => {
		dispatch(wsConnect(`${ORDERS}?token=${token?.replace('Bearer ', '')}`));

		return () => {
			dispatch(wsDisconnect());
		};
	}, [dispatch, token]);

	return (
		<>
			{profileOrders.orders.length === 0 ? (
				<Loader center />
			) : (
				<div className={style.feed}>
					<OrdersList orders={orders} styleList={{ width: '650px' }} />
				</div>
			)}
		</>
	);
};

export default ProfileOrdersPage;
