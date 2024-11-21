import React, { useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsGroup from './burger-ingredients-group';
import style from './burger-ingredients.module.scss';

const valueTabs = [
	{
		code: 'tab_0',
		dataCode: 'bun',
		value: 'Булки',
	},
	{
		code: 'tab_1',
		dataCode: 'sauce',
		value: 'Соусы',
	},
	{
		code: 'tab_2',
		dataCode: 'main',
		value: 'Начинки',
	},
];

const BurgerIngredients: React.FC = () => {
	const groupsRef = useRef<HTMLDivElement>(null);
	const tabsRef = useRef<HTMLDivElement>(null);
	const bunsRef = useRef<HTMLParagraphElement>(null);
	const saucesRef = useRef<HTMLParagraphElement>(null);
	const mainsRef = useRef<HTMLParagraphElement>(null);

	const [currentTab, setCurrentTab] = React.useState<string>('tab_0');

	const handleClickTab = (value: string) => {
		setCurrentTab(value);

		const element = document.getElementById(value);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const getRef = (nameTab: string) => {
		if (nameTab === 'bun') return bunsRef;
		if (nameTab === 'sauce') return saucesRef;
		return mainsRef;
	};

	const handleOnScroll = () => {
		const rectTabs = tabsRef.current?.getBoundingClientRect();
		const rectBuns = bunsRef.current?.getBoundingClientRect();
		const rectSauces = saucesRef.current?.getBoundingClientRect();
		const rectMains = mainsRef.current?.getBoundingClientRect();

		if (rectTabs && rectBuns && rectSauces && rectMains) {
			const diffBuns = Math.abs(rectTabs.bottom - rectBuns.top);
			const diffSauces = Math.abs(rectTabs.bottom - rectSauces.top);
			const diffMains = Math.abs(rectTabs.bottom - rectMains.top);

			const mapDiffRefs = [
				{
					code: 'tab_0',
					diff: diffBuns,
				},
				{
					code: 'tab_1',
					diff: diffSauces,
				},
				{
					code: 'tab_2',
					diff: diffMains,
				},
			];

			const worstTab = mapDiffRefs.reduce((worstTab, tab) =>
				worstTab.diff < tab.diff ? worstTab : tab
			);

			setCurrentTab(worstTab.code);
		}
	};

	return (
		<div className={style.main}>
			<p className='text text_type_main-large pb-5'>Соберите бургер</p>
			<div ref={tabsRef} className={style.tabs}>
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

			<div ref={groupsRef} className={style.groups} onScroll={handleOnScroll}>
				{valueTabs.map((it) => (
					<BurgerIngredientsGroup
						ref={getRef(it.dataCode)}
						key={it.code}
						id={it.code}
						dataCode={it.dataCode}
						title={it.value}
					/>
				))}
			</div>
		</div>
	);
};

export default BurgerIngredients;
