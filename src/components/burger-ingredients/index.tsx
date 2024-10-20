import React from 'react';
import { IData } from '../interfaces/data';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsGroup from './burger-ingredients-group';
import style from './burger-ingredients.module.scss';

export interface IBurgerIngredients {
	buns: IData[];
	sauces: IData[];
	mains: IData[];
}

const valueTabs = [
	{
		code: '0',
		value: 'Булки',
	},
	{
		code: '1',
		value: 'Соусы',
	},
	{
		code: '2',
		value: 'Начинки',
	},
];

const BurgerIngredients: React.FC<IBurgerIngredients> = (props) => {
	const { buns, sauces, mains } = props;
	const [current, setCurrent] = React.useState<string>('0');

	return (
		<div className={style.main}>
			<p className='text text_type_main-large pb-5'>Соберите бургер</p>
			<div className={style.tabs}>
				{valueTabs.map((it) => (
					<Tab
						key={it.code}
						value={it.code}
						active={current === it.code}
						onClick={setCurrent}>
						{it.value}
					</Tab>
				))}
			</div>

			<div className={style.groups}>
				<BurgerIngredientsGroup data={buns} title={'Булки'} />
				<BurgerIngredientsGroup data={sauces} title={'Соусы'} />
				<BurgerIngredientsGroup data={mains} title={'Начинки'} />
			</div>
		</div>
	);
};

export default BurgerIngredients;
