import React from 'react';
import { IData } from '../../../interfaces/data';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients-group-item.module.scss';

export interface IBurgerIngredientsGroupItem {
	item: IData;
	setCurrentIngredient(item: IData): void;
}

const BurgerIngredientsGroupItem: React.FC<IBurgerIngredientsGroupItem> = (
	props
) => {
	const { item, setCurrentIngredient } = props;

	return (
		<div
			className={style.item}
			role='presentation'
			onClick={() => setCurrentIngredient(item)}>
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
