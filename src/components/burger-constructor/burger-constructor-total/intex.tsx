import React, { useState } from 'react';
import {
	Button,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../modal';
import OrderDetails from './order-details';
import style from './burger-constructor-total.module.scss';

export interface IBurgerConstructorTotal {
	total: number;
}

const BurgerConstructorTotal: React.FC<IBurgerConstructorTotal> = (props) => {
	const { total } = props;
	const [openTotalDetails, setOpenTotalDetails] = useState<boolean>(false);

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
				onClick={() => setOpenTotalDetails(true)}>
				Оформить заказ
			</Button>

			{openTotalDetails && (
				<Modal onClose={() => setOpenTotalDetails(false)}>
					<OrderDetails />
				</Modal>
			)}
		</div>
	);
};

export default BurgerConstructorTotal;
