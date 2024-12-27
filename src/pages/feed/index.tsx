import React, { useEffect } from 'react';
import OrdersFeed from '../../components/orders/orders-feed';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getDataOrders } from '../../services/orders/slice';
import { wsConnect, wsDisconnect } from '../../services/orders/action';
import { ORDERS_ALL } from '../../constant/system';
import Loader from '../../components/loader';

const FeedPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const dataOrders = useAppSelector(getDataOrders);

	const ordersDone = dataOrders.orders
		.filter((it) => it.status === 'done')
		.map((item) => item.number)
		.slice(0, 10);
	const ordersPending = dataOrders.orders
		.filter((it) => it.status === 'pending')
		.map((item) => item.number)
		.slice(0, 10);

	useEffect(() => {
		dispatch(wsConnect(ORDERS_ALL));

		return () => {
			dispatch(wsDisconnect());
		};
	}, [dispatch]);

	return (
		<>
			{dataOrders.orders.length === 0 ? (
				<Loader center />
			) : (
				<OrdersFeed
					ordersDone={ordersDone}
					ordersPending={ordersPending}
					dataOrders={dataOrders}
				/>
			)}
		</>
	);
};

export default FeedPage;
