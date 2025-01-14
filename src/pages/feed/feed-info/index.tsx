import React from 'react';
import OrderCard from '../../../components/orders/order-card';
import style from './feed-info.module.scss';

const FeedInfoPage: React.FC = () => (
	<div className={style.main}>
		<OrderCard />
	</div>
);

export default FeedInfoPage;
