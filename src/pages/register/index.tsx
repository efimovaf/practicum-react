import React from 'react';
import CenterPageWrapper from '../../components/ui/center-page-wrapper';
import { Gap } from '../../components/ui/gap';
import {
	Button,
	EmailInput,
	Input,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { register } from '../../services/user/action';
import { useAppDispatch } from '../../hooks/store';
import { IRegisterUserRequest } from '../../interfaces/api';
import { useForm } from '../../hooks/form';
import style from '../common-page.module.scss';

const initState = {
	name: '',
	email: '',
	password: '',
};

const RegisterPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const { values, handleChange } = useForm<IRegisterUserRequest>(initState);

	const onClickRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(register(values));
	};

	return (
		<CenterPageWrapper>
			<Gap size={40} />
			<div className={style.main}>
				<form onSubmit={onClickRegister}>
					<div className={style.edit}>
						<p className='text text_type_main-medium'>Регистрация</p>

						<Input
							type={'text'}
							onChange={handleChange}
							value={values.name}
							name={'name'}
							size={'default'}
							placeholder={'Имя'}
							extraClass='ml-1'
						/>
						<EmailInput
							onChange={handleChange}
							value={values.email}
							name={'email'}
							isIcon={false}
						/>
						<PasswordInput
							onChange={handleChange}
							value={values.password}
							name={'password'}
							extraClass='mb-2'
						/>

						<Button htmlType='submit' type='primary' size='medium'>
							Зарегистрироваться
						</Button>
					</div>
				</form>

				<div className={style.additionalActions}>
					<div className={style.additionalAction}>
						<p className='text text_type_main-default'>Уже зарегистрированы?</p>
						<Link to={'/login'}>Войти</Link>
					</div>
				</div>
			</div>
		</CenterPageWrapper>
	);
};

export default RegisterPage;
