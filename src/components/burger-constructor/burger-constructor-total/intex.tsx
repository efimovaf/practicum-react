import React from 'react';
import {
	Button,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor-total.module.scss';

export interface IBurgerConstructorTotal {
	total: number;
}

const BurgerConstructorTotal: React.FC<IBurgerConstructorTotal> = (props) => {
	const { total } = props;

	return (
		<div className={style.main}>
			<div className={style.totalGroup}>
				<p className='text text_type_digits-medium'>{total}</p>
				<CurrencyIcon className={style.totalIcon} type='primary' />
			</div>
			<Button htmlType='button' type='primary' size='large'>
				Оформить заказ
			</Button>
		</div>
	);
};

export default BurgerConstructorTotal;
