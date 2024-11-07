import React from 'react';
import { IIngredient } from '../../../interfaces/ingredient';
import { Gap } from '../../ui/gap';
import style from './ingredient-details.module.scss';

export interface IIngredientDetails {
	item: IIngredient;
}

const parametersMap = [
	{
		code: 'calories',
		title: 'Калории, ккал',
	},
	{
		code: 'proteins',
		title: 'Белки, г',
	},
	{
		code: 'fat',
		title: 'Жиры, г',
	},
	{
		code: 'carbohydrates',
		title: 'Углеводы, г',
	},
];

const IngredientDetails: React.FC<IIngredientDetails> = ({ item }) => {
	return (
		<div className={style.main}>
			<div className={style.imageWrapper}>
				<img className={style.image} alt={item.name} src={item.image_large} />
			</div>
			<Gap size={4} />
			<p className={`text text_type_main-medium ${style.centerHor}`}>
				{item.name}
			</p>
			<Gap size={8} />
			<div className={style.parameters}>
				{parametersMap.map((it) => (
					<div key={it.code} className={style.parameter}>
						<p
							className={`text text_type_main-default text_color_inactive ${style.centerHor}`}>
							{it.title}
						</p>
						<p
							className={`text text_type_digits-default text_color_inactive ${style.centerHor}`}>
							{item[it.code as keyof IIngredient]}
						</p>
					</div>
				))}
			</div>
			<Gap size={5} />
		</div>
	);
};

export default IngredientDetails;
