import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Button,
	EmailInput,
	Input,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Gap } from '../../components/ui/gap';
import style from './profile-page.module.scss';

const ProfilePage: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Gap size={30} />
			<div className={style.main}>
				<nav className={style.nav}>
					<ul className={style.ul}>
						<li>
							<NavLink to={'/'}>
								{({ isActive }) => (
									<p className={isActive ? style.navTextActive : style.navText}>
										Профиль
									</p>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to={'/'}>
								{({ isActive }) => (
									<p className={isActive ? style.navTextActive : style.navText}>
										История заказов
									</p>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to={'/'}>
								{({ isActive }) => (
									<p className={isActive ? style.navTextActive : style.navText}>
										Выход
									</p>
								)}
							</NavLink>
						</li>
					</ul>

					<Gap size={27} />

					<p className='text text_type_main-default text_color_inactive'>
						В этом разделе вы можете изменить свои персональные данные
					</p>
				</nav>

				<div className={style.edit}>
					<Input
						type={'text'}
						onChange={(e) => setName(e.target.value)}
						value={name}
						name={'name'}
						size={'default'}
						placeholder={'Имя'}
						extraClass='ml-1'
						icon={'EditIcon'}
					/>
					<EmailInput
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						name={'email'}
						placeholder='Логин'
						isIcon={true}
					/>
					<PasswordInput
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						name={'password'}
						extraClass='mb-2'
						icon={'EditIcon'}
					/>

					<div className={style.actions}>
						<Button htmlType='button' type='secondary' size='medium'>
							Отмена
						</Button>
						<Button htmlType='button' type='primary' size='medium'>
							Сохранить
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
