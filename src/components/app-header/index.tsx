import React from 'react';
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from './navigation-link';
import style from './app-header.module.scss';

const AppHeader: React.FC = () => {
	return (
		<div className={style.main}>
			<div className={style.content}>
				<div className={style.navigationGroup}>
					<NavigationLink
						label={'Конструктор'}
						icon={<BurgerIcon type='primary' />}
					/>
					<NavigationLink
						label={'Лента заказов'}
						icon={<ListIcon type='secondary' />}
					/>
				</div>
				<Logo className={style.logo} />
				<div className={style.account}>
					<NavigationLink
						label={'Личный кабинет'}
						icon={<ProfileIcon type='secondary' />}
					/>
				</div>
			</div>
		</div>
	);
};

export default AppHeader;
