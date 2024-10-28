import React from 'react';
import { Gap } from '../../../ui/gap';
import doneImg from '../../../../images/done.png';
import style from './order-details.module.scss';

const OrderDetails: React.FC = () => {
	return (
		<div className={style.main}>
			<Gap size={4} />
			<p className={style.total}>034586</p>
			<Gap size={8} />
			<p className='text text_type_main-medium'>идентификатор заказа</p>
			<Gap size={15} />
			<img alt={'done'} src={doneImg} />
			<Gap size={15} />
			<p className='text text_type_main-default'>Ваш заказ начали готовить</p>
			<p className='text text_type_main-default text_color_inactive'>
				Дождитесь готовности на орбитальной станции
			</p>
			<Gap size={20} />
		</div>
	);
};

export default OrderDetails;
