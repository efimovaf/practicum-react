import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import { IIngredientWithKey } from '../../../../interfaces/ingredient';
import {
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteConstructorItem } from '../../../../services/constructor-ingredients/action';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getConstructorIngredients } from '../../../../services/constructor-ingredients/selectors';
import style from '../burger-constructor-list.module.scss';

interface IConstructorElement {
	item: IIngredientWithKey;
	moveCard(dragIndex: number, hoverIndex: number): void;
}

const ConstructorItem: React.FC<IConstructorElement> = ({ item, moveCard }) => {
	const { _key: id } = item;
	const dispatch = useAppDispatch();
	const ingredients = useAppSelector(getConstructorIngredients);
	const index = ingredients.indexOf(item);

	const ref = useRef<HTMLDivElement>(null);
	const [{ handlerId }, drop] = useDrop<
		IIngredientWithKey,
		void,
		{ handlerId: Identifier | null }
	>({
		accept: 'item',
		collect: (monitor) => ({
			handlerId: monitor.getHandlerId(),
		}),
		hover(item: IIngredientWithKey, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}

			const hoverBoundingRect = ref.current?.getBoundingClientRect();

			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			const clientOffset = monitor.getClientOffset();

			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			moveCard(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});

	const [{ opacity }, drag] = useDrag({
		type: 'item',
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	drag(drop(ref));

	const onDeleteItem = (item: IIngredientWithKey) => {
		dispatch(deleteConstructorItem(item));
	};

	return (
		<div
			data-cy={`ingredient_item_${id}`}
			key={item._key}
			ref={ref}
			className={style.item}
			data-handler-id={handlerId}
			style={{ opacity }}>
			<DragIcon type='primary' />
			<ConstructorElement
				text={item.name}
				price={item.price}
				thumbnail={item.image}
				handleClose={() => onDeleteItem(item)}
			/>
		</div>
	);
};

export default ConstructorItem;
