import React, { useState } from 'react';
import { Gap } from '../../components/ui/gap';
import {
	Button,
	EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import CenterPageWrapper from '../../components/ui/center-page-wrapper';
import style from '../common-page.module.scss';

const ForgotPasswordPage: React.FC = () => {
	const [email, setEmail] = useState('');

	return (
		<CenterPageWrapper>
			<Gap size={40} />
			<div className={style.main}>
				<div className={style.edit}>
					<p className='text text_type_main-medium'>Восстановление пароля</p>

					<EmailInput
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						name={'email'}
						placeholder='Укажите e-mail'
						isIcon={false}
					/>

					<Button htmlType='button' type='primary' size='medium'>
						Восстановить
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

export default ForgotPasswordPage;
