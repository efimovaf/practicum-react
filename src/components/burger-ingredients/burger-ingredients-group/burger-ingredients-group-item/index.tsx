import React from 'react';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { IIngredient } from '../../../../interfaces/ingredient';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-ingredients-group-item.module.scss';

export interface IBurgerIngredientsGroupItem {
	item: IIngredient;
	count?: number;
}

const BurgerIngredientsGroupItem: React.FC<IBurgerIngredientsGroupItem> = (
	props
) => {
	const location = useLocation();
	const { item, count } = props;
	const { _id: id } = item;

	const [{ opacity }, dragRef] = useDrag({
		type: item.type === 'bun' ? 'bun' : 'ingredients',
		item: { id },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	return (
		<Link
			key={id}
			to={`/ingredients/${id}`}
			state={{ backgroundLocation: location }}>
			<div
				ref={dragRef}
				className={style.item}
				role='presentation'
				style={{ opacity }}>
				{count && <Counter count={count} size='default' extraClass='m-1' />}
				<img alt={item.name} src={item.image} />
				<div className={style.price}>
					<p className={style.priceText}>{item.price}</p>
					<CurrencyIcon type='primary' />
				</div>
				<p className={style.name}>{item.name}</p>
			</div>
		</Link>
	);
};

export default BurgerIngredientsGroupItem;
