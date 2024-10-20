import React from 'react';
import { IData } from '../../interfaces/data';
import BurgerIngredientsGroupItem from './burger-ingredients-group-item';
import style from './burger-ingredients-group.module.scss';

export interface IBurgerIngredientsGroup {
	title: string;
	data: IData[];
}

const BurgerIngredientsGroup: React.FC<IBurgerIngredientsGroup> = (props) => {
	const { data, title } = props;

	return (
		<div>
			<p className='text text_type_main-medium pb-6'>{title}</p>
			<div className={style.items}>
				{data.map((it) => (
					<BurgerIngredientsGroupItem key={it._id} item={it} />
				))}
			</div>
		</div>
	);
};

export default BurgerIngredientsGroup;
