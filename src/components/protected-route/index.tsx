import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { getIsAuthChecked, getUser } from '../../services/user/selectors';
import Loader from '../loader';

type TProtectedProps = {
	onlyUnAuth?: boolean;
	component: React.JSX.Element;
};

const ProtectedRoute = ({
	onlyUnAuth = false,
	component,
}: TProtectedProps): React.JSX.Element => {
	const isAuthChecked = useAppSelector(getIsAuthChecked);
	const user = useAppSelector(getUser);
	const location = useLocation();

	if (!isAuthChecked) {
		return <Loader center />;
	}

	if (onlyUnAuth && user) {
		const { from } = location.state ?? { from: { pathname: '/' } };
		return <Navigate to={from} />;
	}

	if (!onlyUnAuth && !user) {
		return <Navigate to='/login' state={{ from: location }} />;
	}

	return component;
};

export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({
	component,
}: {
	component: React.JSX.Element;
}): React.JSX.Element => (
	<ProtectedRoute onlyUnAuth={true} component={component} />
);
