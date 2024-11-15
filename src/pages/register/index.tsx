import React, { useState } from 'react';
import CenterPageWrapper from '../../components/ui/center-page-wrapper';
import { Gap } from '../../components/ui/gap';
import {
	Button,
	EmailInput,
	Input,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import style from '../common-page.module.scss';

const RegisterPage: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<CenterPageWrapper>
			<Gap size={40} />
			<div className={style.main}>
				<div className={style.edit}>
					<p className='text text_type_main-medium'>Регистрация</p>

					<Input
						type={'text'}
						onChange={(e) => setName(e.target.value)}
						value={name}
						name={'name'}
						size={'default'}
						placeholder={'Имя'}
						extraClass='ml-1'
					/>
					<EmailInput
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						name={'email'}
						isIcon={false}
					/>
					<PasswordInput
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						name={'password'}
						extraClass='mb-2'
					/>

					<Button htmlType='button' type='primary' size='medium'>
						Зарегистрироваться
					</Button>
				</div>

				<div className={style.additionalActions}>
					<div className={style.additionalAction}>
						<p className='text text_type_main-default'>Уже зарегистрированы?</p>
						<Link to={'/'}>Войти</Link>
					</div>
				</div>
			</div>
		</CenterPageWrapper>
	);
};

export default RegisterPage;
