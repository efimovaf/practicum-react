import React from 'react';
import { Gap } from '../../ui/gap';
import OrdersList from '../orders-list';
import { IDataIOrders } from '../../../interfaces/feed';
import style from './orders-feed.module.scss';

interface IOrdersFeed {
	ordersDone: number[];
	ordersPending: number[];
	dataOrders: IDataIOrders;
}

const OrdersFeed: React.FC<IOrdersFeed> = ({
	dataOrders,
	ordersDone,
	ordersPending,
}) => {
	return (
		<div className={style.feed}>
			<OrdersList orders={dataOrders.orders} styleList={{ width: '650px' }} />

			<Gap size={15} />

			<div className={style.stats}>
				<div className={style.orders}>
					<div className={style.block}>
						<p className='text text_type_main-medium'>Готовы:</p>
						<div className={style.blockList}>
							{ordersDone.map((it) => (
								<p key={it} className={style.numOrdersDone}>
									{it}
								</p>
							))}
						</div>
					</div>

					<div className={style.block}>
						<p className='text text_type_main-medium'>В работе:</p>
						<div className={style.blockList}>
							{ordersPending.map((it) => (
								<p key={it} className={style.numOrders}>
									{it}
								</p>
							))}
						</div>
					</div>
				</div>

				<Gap size={15} />

				<div className={style.completed}>
					<p className='text text_type_main-medium'>Выполнено за все время:</p>
					<p className={style.completedNumber}>{dataOrders.total}</p>
				</div>

				<Gap size={15} />

				<div className={style.completed}>
					<p className='text text_type_main-medium'>Выполнено за сегодня:</p>
					<p className={style.completedNumber}>{dataOrders.totalToday}</p>
				</div>
			</div>
		</div>
	);
};

export default OrdersFeed;
