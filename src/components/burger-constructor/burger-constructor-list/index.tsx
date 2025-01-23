import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { getAllIngredients } from '../../../services/ingredients/selectors';
import {
	addConstructorItem,
	sortConstructorIngredients,
} from '../../../services/constructor-ingredients/action';
import { getConstructorIngredients } from '../../../services/constructor-ingredients/selectors';
import ConstructorElementEmpty from './burger-constructor-element-empty';
import BurgerConstructorListBun from './burger-constructor-list-bun';
import ConstructorItem from './burger-constructor-element';
import { findIngredient } from '../../../utils/filter-data';
import style from './burger-constructor-list.module.scss';

const BurgerConstructorList: React.FC = () => {
	const dispatch = useAppDispatch();

	const ingredients = useAppSelector(getConstructorIngredients);
	const allIngredients = useAppSelector(getAllIngredients);

	const dispatchIngredient = (itemId: { id: string }) => {
		const ingredient = findIngredient(allIngredients, itemId.id);

		if (ingredient) dispatch(addConstructorItem(ingredient));
	};

	const [{ isOver, canDrop }, dropIngredientsTarget] = useDrop(() => ({
		accept: 'ingredients',
		drop: (itemId: { id: string }) => dispatchIngredient(itemId),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const moveCard = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const newIngredients = [...ingredients];
			newIngredients.splice(
				dragIndex,
				0,
				newIngredients.splice(hoverIndex, 1)[0]
			);

			dispatch(sortConstructorIngredients(newIngredients));
		},
		[dispatch, ingredients]
	);

	const isActive = isOver && canDrop;

	return (
		<div className={style.main}>
			<BurgerConstructorListBun type={'top'} />
			<div
				ref={dropIngredientsTarget}
				className={style.listRef}
				data-cy='ingredients_list'>
				{ingredients && ingredients.length > 0 ? (
					<div data-cy='ingredients_item' className={style.list}>
						{ingredients.map((it) => (
							<ConstructorItem key={it._key} item={it} moveCard={moveCard} />
						))}
					</div>
				) : (
					<ConstructorElementEmpty
						text={'Выберите начинку'}
						extraClass={`${style.mainElement} ${
							isActive ? style.active : canDrop ? style.canDrop : ''
						}`}
					/>
				)}
			</div>
			<BurgerConstructorListBun type={'bottom'} />
		</div>
	);
};

export default BurgerConstructorList;
