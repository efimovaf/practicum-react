import React from 'react';
import BurgerConstructorList from './burger-constructor-list';
import BurgerConstructorTotal from './burger-constructor-total/intex';
import style from './burger-constructor.module.scss';

const BurgerConstructor: React.FC = () => {
	return (
		<div className={style.main}>
			<BurgerConstructorList />
			<BurgerConstructorTotal total={1589} />
		</div>
	);
};

export default BurgerConstructor;
