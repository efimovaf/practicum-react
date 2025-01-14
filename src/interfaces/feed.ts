import { IOrder } from './order';

export interface IDataIOrders {
	orders: IOrder[];
	total: number;
	totalToday: number;
}
