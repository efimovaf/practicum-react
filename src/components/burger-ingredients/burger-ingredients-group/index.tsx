import React, { useMemo } from 'react';
import { useAppSelector } from '../../../hooks/store';
import { getIngredientsByType } from '../../../services/ingredients/selectors';
import {
	getBun,
	getConstructorIngredients,
} from '../../../services/constructor-ingredients/selectors';
import BurgerIngredientsGroupItem from './burger-ingredients-group-item';
import style from './burger-ingredients-group.module.scss';

export interface IBurgerIngredientsGroup {
	id: string;
	title: string;
	dataCode: string;
}

type IObjectCount = Record<string, number>;

const BurgerIngredientsGroup = React.forwardRef<
	HTMLDivElement,
	IBurgerIngredientsGroup
>((props, ref) => {
	const { id, title, dataCode, ...rest } = props;

	const data = useAppSelector(getIngredientsByType(dataCode));
	const bun = useAppSelector(getBun);
	const ingredients = useAppSelector(getConstructorIngredients);

	const objectCount = useMemo(() => {
		const ids: string[] =
			dataCode === 'bun' && bun
				? [bun._id, bun._id]
				: ingredients.map((it) => it._id);

		return ids.reduce((accumulator: IObjectCount, value) => {
			return {
				...accumulator,
				[value]: (accumulator[value] || 0) + 1,
			};
		}, {});
	}, [bun, dataCode, ingredients]);

	return (
		<div id={id}>
			<p ref={ref} className='text text_type_main-medium pb-6 pt-10'>
				{title}
			</p>
			<div className={style.items}>
				{data.map((it) => (
					<BurgerIngredientsGroupItem
						{...rest}
						key={it._id}
						item={it}
						count={objectCount[it._id]}
					/>
				))}
			</div>
		</div>
	);
});

export default BurgerIngredientsGroup;

BurgerIngredientsGroup.displayName = 'BurgerIngredientsGroup';
