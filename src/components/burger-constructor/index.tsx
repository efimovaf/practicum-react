import React from 'react';
import { IData } from '../interfaces/data';
import BurgerConstructorList from './burger-constructor-list';
import BurgerConstructorTotal from './burger-constructor-total/intex';
import style from './burger-constructor.module.scss';

export interface IBurgerConstructor {
	bun: IData;
	dataList: IData[];
}

const BurgerConstructor: React.FC<IBurgerConstructor> = (props) => {
	return (
		<div className={style.main}>
			<BurgerConstructorList {...props} />
			<BurgerConstructorTotal total={1589} />
		</div>
	);
};

export default BurgerConstructor;
