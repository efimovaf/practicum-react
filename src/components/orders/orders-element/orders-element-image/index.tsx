import React from 'react';
import { IIngredient } from '../../../../interfaces/ingredient';
import style from './orders-element-image.module.scss';

interface IOrdersElementImage {
	element?: IIngredient;
	count?: number;
	styleCircle?: React.CSSProperties;
}

const OrdersElementImage: React.FC<IOrdersElementImage> = ({
	element,
	count,
	styleCircle,
}) => {
	return (
		<div className={style.elementImage} style={styleCircle}>
			{count ? (
				`+${count}`
			) : (
				<img
					className={style.image}
					alt={element?.name}
					src={element?.image_mobile}
				/>
			)}
		</div>
	);
};

export default OrdersElementImage;
