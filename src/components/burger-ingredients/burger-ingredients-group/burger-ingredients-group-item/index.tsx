import React from 'react';
import { useDrag } from 'react-dnd';
import { useAppDispatch } from '../../../../hooks/store';
import { addIngredient } from '../../../../services/current-ingredient/action';
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
	const { item, count } = props;
	const { _id: id } = item;

	const [{ opacity }, dragRef] = useDrag({
		type: item.type === 'bun' ? 'bun' : 'ingredients',
		item: { id },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	const dispatch = useAppDispatch();

	const onClickItem = () => {
		dispatch(addIngredient(item));
	};

	return (
		<div
			ref={dragRef}
			className={style.item}
			role='presentation'
			style={{ opacity }}
			onClick={onClickItem}>
			{count && <Counter count={count} size='default' extraClass='m-1' />}
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
