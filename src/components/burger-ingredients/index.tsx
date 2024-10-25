import React, { useRef } from 'react';
import { IData } from '../interfaces/data';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsGroup from './burger-ingredients-group';
import IngredientDetails from './ingredient-details';
import Modal from '../modal';
import style from './burger-ingredients.module.scss';


export interface IBurgerIngredients {
	buns: IData[];
	sauces: IData[];
	mains: IData[];
}

const valueTabs = [
	{
		code: 'tab_0',
		value: 'Булки',
	},
	{
		code: 'tab_1',
		value: 'Соусы',
	},
	{
		code: 'tab_2',
		value: 'Начинки',
	},
];

const BurgerIngredients: React.FC<IBurgerIngredients> = (props) => {
	const { buns, sauces, mains } = props;
	const groupsRef = useRef<HTMLDivElement>(null);
	const [currentTab, setCurrentTab] = React.useState<string>('tab_0');
	const [currentIngredient, setCurrentIngredient] = React.useState<
		IData | undefined
	>();

	const handleClickTab = (value: string) => {
		setCurrentTab(value);

		const element = document.getElementById(value);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<div className={style.main}>
			<p className='text text_type_main-large pb-5'>Соберите бургер</p>
			<div className={style.tabs}>
				{valueTabs.map((it) => (
					<Tab
						key={it.code}
						value={it.code}
						active={currentTab === it.code}
						onClick={handleClickTab}>
						{it.value}
					</Tab>
				))}
			</div>

			<div ref={groupsRef} className={style.groups}>
				<BurgerIngredientsGroup
					id={'tab_0'}
					data={buns}
					title={'Булки'}
					setCurrentIngredient={setCurrentIngredient}
				/>
				<BurgerIngredientsGroup
					id={'tab_1'}
					data={sauces}
					title={'Соусы'}
					setCurrentIngredient={setCurrentIngredient}
				/>
				<BurgerIngredientsGroup
					id={'tab_2'}
					data={mains}
					title={'Начинки'}
					setCurrentIngredient={setCurrentIngredient}
				/>
			</div>

			{currentIngredient && (
				<Modal
					title={'Детали ингредиента'}
					onClose={() => setCurrentIngredient(undefined)}>
					<IngredientDetails item={currentIngredient} />
				</Modal>
			)}
		</div>
	);
};

export default BurgerIngredients;
