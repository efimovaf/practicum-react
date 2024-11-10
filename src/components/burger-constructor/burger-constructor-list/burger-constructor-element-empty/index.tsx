import React from 'react';
import style from './burger-constructor-element-empty.module.scss';

interface IConstructorElementEmpty {
	text: string;
	type?: 'top' | 'bottom';
	extraClass?: string;
}

type ITypes = Record<string, string>;

const types: ITypes = {
	top: 'constructor-element_pos_top',
	bottom: 'constructor-element_pos_bottom',
};

const ConstructorElementEmpty: React.FC<IConstructorElementEmpty> = (props) => {
	const { text, type, extraClass } = props;

	const classNameBun = type ? types[type] : '';
	const className = `constructor-element ${extraClass} ${classNameBun}`;

	return (
		<div className={className} style={{ height: '100%' }}>
			<span className={`constructor-element__row ${style.text}`}>{text}</span>
		</div>
	);
};

export default ConstructorElementEmpty;
