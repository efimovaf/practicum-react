import React, { useEffect, useState } from 'react';
import {
	Button,
	EmailInput,
	Input,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getUser } from '../../services/user/selectors';
import { updateUserAuth } from '../../services/user/action';
import { IUpdateUserRequest } from '../../interfaces/api';
import { useForm } from '../../hooks/form';
import style from './profile-page.module.scss';

const initState = {
	name: '',
	email: '',
	password: '',
};

const ProfilePage: React.FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);
	const { values, handleChange, setValues } =
		useForm<IUpdateUserRequest>(initState);

	const [nameDisabled, setNameDisabled] = useState(true);

	useEffect(
		() =>
			setValues((prevState) => ({
				...prevState,
				name: user?.name ?? '',
				email: user?.email ?? '',
			})),
		[setValues, user]
	);

	const isChangeForm =
		values.name !== user?.name ||
		values.email !== user.email ||
		values.password !== '';

	const onClickCancel = () => {
		setValues({
			...initState,
			name: user?.name ?? '',
			email: user?.email ?? '',
		});
	};

	const onClickSave = () => {
		dispatch(updateUserAuth(values));
	};

	return (
		<div className={style.edit}>
			<Input
				disabled={nameDisabled}
				type={'text'}
				onChange={handleChange}
				value={values.name}
				name={'name'}
				size={'default'}
				placeholder={'Имя'}
				extraClass='ml-1'
				icon={'EditIcon'}
				onIconClick={() => setNameDisabled(!nameDisabled)}
				onBlur={() => setNameDisabled(!nameDisabled)}
			/>
			<EmailInput
				onChange={handleChange}
				value={values.email}
				name={'email'}
				placeholder='Логин'
				isIcon={true}
			/>
			<PasswordInput
				onChange={handleChange}
				value={values.password}
				name={'password'}
				extraClass='mb-2'
				icon={'EditIcon'}
			/>

			{isChangeForm ? (
				<div className={style.actions}>
					<Button
						htmlType='button'
						type='secondary'
						size='medium'
						onClick={onClickCancel}>
						Отмена
					</Button>
					<Button
						htmlType='button'
						type='primary'
						size='medium'
						onClick={onClickSave}>
						Сохранить
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default ProfilePage;
