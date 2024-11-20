import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from './navigation-link';
import { useAppSelector } from '../../hooks/store';
import { getUser } from '../../services/user/selectors';
import style from './app-header.module.scss';

const AppHeader: React.FC = () => {
	const user = useAppSelector(getUser);

	return (
		<header className={style.mainHeader}>
			<nav className={style.nav}>
				<ul className={style.ul}>
					<li className={style.li}>
						<div className={style.navigationGroup}>
							<NavLink to={'/'} className={style.link}>
								{({ isActive }) => (
									<NavigationLink
										isActive={isActive}
										label={'Конструктор'}
										icon={
											<BurgerIcon type={isActive ? 'primary' : 'secondary'} />
										}
									/>
								)}
							</NavLink>
							<NavLink to={'/feed'} className={style.link}>
								{({ isActive }) => (
									<NavigationLink
										isActive={isActive}
										label={'Лента заказов'}
										icon={
											<ListIcon type={isActive ? 'primary' : 'secondary'} />
										}
									/>
								)}
							</NavLink>
						</div>
					</li>
					<li>
						<Logo />
					</li>
					<li className={style.li}>
						<div className={style.profile}>
							<NavLink to={'/profile'} className={style.link}>
								{({ isActive }) => (
									<NavigationLink
										isActive={isActive}
										label={user?.name ?? 'Личный кабинет'}
										icon={
											<ProfileIcon type={isActive ? 'primary' : 'secondary'} />
										}
									/>
								)}
							</NavLink>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
