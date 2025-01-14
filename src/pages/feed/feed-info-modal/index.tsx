import React from 'react';
import OrderCard from '../../../components/orders/order-card';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';

const FeedInfoModalPage: React.FC = () => {
	const navigate = useNavigate();

	const onDismiss = () => {
		navigate(-1);
	};

	return (
		<Modal onClose={onDismiss}>
			<OrderCard />
		</Modal>
	);
};

export default FeedInfoModalPage;
