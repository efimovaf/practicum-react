import React from 'react';
import style from './center-page-wrapper.module.scss';

const CenterPageWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <div className={style.wrapper}>{children}</div>;

export default CenterPageWrapper;
