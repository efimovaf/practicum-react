import React, { useState } from 'react';
import CenterPageWrapper from '../../components/ui/center-page-wrapper';
import { Gap } from '../../components/ui/gap';
import {
	Button,
	Input,
	PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import style from '../common-page.module.scss';

const ResetPasswordPage: React.FC = () => {
	const [password, setPassword] = useState('');
	const [code, setCode] = useState('');

	return (
		<CenterPageWrapper>
			<Gap size={40} />
			<div className={style.main}>
				<div className={style.edit}>
					<p className='text text_type_main-medium'>Восстановление пароля</p>

					<PasswordInput
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						name={'password'}
						placeholder='Введите новый пароль'
						extraClass='mb-2'
					/>
					<Input
						type={'text'}
						onChange={(e) => setCode(e.target.value)}
						value={code}
						name={'code'}
						size={'default'}
						placeholder={'Введите код из письма'}
						extraClass='ml-1'
					/>

					<Button htmlType='button' type='primary' size='medium'>
						Сохранить
					</Button>
				</div>

				<div className={style.additionalActions}>
					<div className={style.additionalAction}>
						<p className='text text_type_main-default'>Вспомнили пароль?</p>
						<Link to={'/'}>Войти</Link>
					</div>
				</div>
			</div>
		</CenterPageWrapper>
	);
};

export default ResetPasswordPage;
