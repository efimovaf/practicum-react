import React from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getAllIngredients } from '../../../../services/ingredients/selectors';
import { addConstructorBun } from '../../../../services/constructor-ingredients/action';
import { getBun } from '../../../../services/constructor-ingredients/selectors';
import ConstructorElementEmpty from '../burger-constructor-element-empty';
import { findIngredient } from '../../../../utils/filter-data';
import style from '../burger-constructor-list.module.scss';

interface IBurgerConstructorListBun {
	type: 'top' | 'bottom';
}
const BurgerConstructorListBun: React.FC<IBurgerConstructorListBun> = ({
	type,
}) => {
	const dispatch = useAppDispatch();

	const { bun, allIngredients } = useAppSelector((state) => ({
		bun: getBun(state),
		allIngredients: getAllIngredients(state),
	}));

	const dispatchIngredient = (itemId: { id: string }) => {
		const ingredient = findIngredient(allIngredients, itemId.id);

		if (ingredient) dispatch(addConstructorBun(ingredient));
	};

	const [{ isOver, canDrop }, dropTarget] = useDrop(() => ({
		accept: 'bun',
		drop: (itemId: { id: string }) => dispatchIngredient(itemId),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = isOver && canDrop;

	return (
		<div ref={dropTarget}>
			{bun ? (
				<ConstructorElement
					isLocked
					type={type}
					extraClass={`${style.mainElement} ${isActive ? style.active : ''}`}
					text={`${bun.name} ${type === 'top' ? '(верх)' : '(низ)'}`}
					price={bun.price}
					thumbnail={bun.image}
				/>
			) : (
				<ConstructorElementEmpty
					type={type}
					text={'Выберите булки'}
					extraClass={`${style.mainElement} ${
						isActive ? style.active : canDrop ? style.canDrop : ''
					}`}
				/>
			)}
		</div>
	);
};

export default BurgerConstructorListBun;
