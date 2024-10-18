import React from 'react';
import { IData } from '../../../../app';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients-group-item.module.scss';

export interface IBurgerIngredientsGroupItem {
	item: IData;
}

const BurgerIngredientsGroupItem: React.FC<IBurgerIngredientsGroupItem> = (
	props
) => {
	const { item } = props;

	return (
		<div className={style.item}>
			<Counter count={1} size='default' extraClass='m-1' />
			<img alt={item.name} src={item.image} />
			<div className={style.price}>
				<p className='text text_type_digits-default'>{item.price}</p>
				<CurrencyIcon type='primary' />
			</div>
			<p className={style.name}>{item.name}</p>
		</div>
	);
};

export default BurgerIngredientsGroupItem;
