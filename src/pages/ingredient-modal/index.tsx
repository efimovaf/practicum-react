import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../components/modal';
import IngredientDetails from '../../components/burger-ingredients/ingredient-details';
import { getIngredientById } from '../../services/ingredients/selectors';
import { useAppSelector } from '../../hooks/store';

const IngredientModalPage: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const currentIngredient = useAppSelector(getIngredientById(id));

	const onDismiss = () => {
		navigate(-1);
	};

	return (
		<Modal title={'Детали ингредиента'} onClose={onDismiss}>
			<IngredientDetails item={currentIngredient} />
		</Modal>
	);
};

export default IngredientModalPage;
