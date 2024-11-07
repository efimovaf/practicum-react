import React from 'react';

interface IConstructorElementEmpty {
	text: string;
	type?: 'top' | 'bottom';
	extraClass?: string;
}

const ConstructorElementEmpty: React.FC<IConstructorElementEmpty> = (props) => {
	const { text, type, extraClass } = props;

	const classNameBun = type
		? type === 'top'
			? 'constructor-element_pos_top'
			: 'constructor-element_pos_bottom'
		: '';
	const className = `constructor-element ${extraClass} ${classNameBun}`;

	return (
		<div className={className} style={{ height: '100%' }}>
			<span
				className='constructor-element__row'
				style={{ height: '100%', justifyContent: 'center' }}>
				{text}
			</span>
		</div>
	);
};

export default ConstructorElementEmpty;
