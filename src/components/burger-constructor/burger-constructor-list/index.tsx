import React from 'react';
import { IData } from '../../interfaces/data';
import {
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor-list.module.scss';

export interface IBurgerConstructorList {
	bun: IData;
	dataList: IData[];
}

const BurgerConstructorList: React.FC<IBurgerConstructorList> = (props) => {
	const { bun, dataList } = props;

	return (
		<div className={style.main}>
			<ConstructorElement
				isLocked
				type='top'
				extraClass={style.mainElement}
				text={`${bun.name} (верх)`}
				price={bun.price}
				thumbnail={bun.image}
			/>
			<div className={style.list}>
				{dataList.map((it) => (
					<div key={it._id} className={style.item}>
						<DragIcon type='primary' />
						<ConstructorElement
							text={it.name}
							price={it.price}
							thumbnail={it.image}
						/>
					</div>
				))}
			</div>
			<ConstructorElement
				isLocked
				type='bottom'
				extraClass={style.mainElement}
				text={`${bun.name} (низ)`}
				price={bun.price}
				thumbnail={bun.image}
			/>
		</div>
	);
};

export default BurgerConstructorList;
