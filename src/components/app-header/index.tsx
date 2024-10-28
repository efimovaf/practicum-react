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
		<header className={style.mainHeader}>
			<nav className={style.nav}>
				<ul className={style.ul}>
					<li className={style.li}>
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
					</li>
					<li>
						<Logo />
					</li>
					<li className={style.li}>
						<div className={style.profile}>
							<NavigationLink
								label={'Личный кабинет'}
								icon={<ProfileIcon type='secondary' />}
							/>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
