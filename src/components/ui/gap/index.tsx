import React from 'react';
import style from './gap.module.scss';

interface IGapProps {
	size?: number;
}

/** Отступ. */
export const Gap: React.FC<IGapProps> = (props) => {
	const { size } = props;
	const sizeCalc = 4 * (size ?? 1);

	const sizeStyle = {
		width: `${sizeCalc}px`,
		height: `${sizeCalc}px`,
	};

	return <div className={style.gap} style={sizeStyle} />;
};

Gap.displayName = 'Gap';
