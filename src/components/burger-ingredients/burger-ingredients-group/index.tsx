import React from 'react';
import { IData } from '../../interfaces/data';
import BurgerIngredientsGroupItem from './burger-ingredients-group-item';
import style from './burger-ingredients-group.module.scss';

export interface IBurgerIngredientsGroup {
	id: string;
	title: string;
	data: IData[];
	setCurrentIngredient(item: IData): void;
}

const BurgerIngredientsGroup: React.FC<IBurgerIngredientsGroup> = (props) => {
	const { id, data, title, ...rest } = props;

	return (
		<div id={id}>
			<p className='text text_type_main-medium pb-6 pt-10'>{title}</p>
			<div className={style.items}>
				{data.map((it) => (
					<BurgerIngredientsGroupItem {...rest} key={it._id} item={it} />
				))}
			</div>
		</div>
	);
};

export default BurgerIngredientsGroup;
