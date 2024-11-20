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
import style from './profile-page.module.scss';

const initFormValue = {
	name: '',
	email: '',
	password: '',
};

const ProfilePage: React.FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);

	const [nameDisabled, setNameDisabled] = useState(true);
	const [formValue, setFormValue] = useState<IUpdateUserRequest>(initFormValue);

	useEffect(
		() =>
			setFormValue((prevState) => ({
				...prevState,
				name: user?.name ?? '',
				email: user?.email ?? '',
			})),
		[user]
	);

	const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValue((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const isChangeForm =
		formValue.name !== user?.name ||
		formValue.email !== user.email ||
		formValue.password !== '';

	const onClickCancel = () => {
		setFormValue({
			...initFormValue,
			name: user?.name ?? '',
			email: user?.email ?? '',
		});
	};

	const onClickSave = () => {
		dispatch(updateUserAuth(formValue));
	};

	return (
		<div className={style.edit}>
			<Input
				disabled={nameDisabled}
				type={'text'}
				onChange={onChangeForm}
				value={formValue.name}
				name={'name'}
				size={'default'}
				placeholder={'Имя'}
				extraClass='ml-1'
				icon={'EditIcon'}
				onIconClick={() => setNameDisabled(!nameDisabled)}
				onBlur={() => setNameDisabled(!nameDisabled)}
			/>
			<EmailInput
				onChange={onChangeForm}
				value={formValue.email}
				name={'email'}
				placeholder='Логин'
				isIcon={true}
			/>
			<PasswordInput
				onChange={onChangeForm}
				value={formValue.password}
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
