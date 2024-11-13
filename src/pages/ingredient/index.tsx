import React from 'react';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/burger-ingredients/ingredient-details';
import { getIngredientById } from '../../services/ingredients/selectors';
import { useAppSelector } from '../../hooks/store';
import { Gap } from '../../components/ui/gap';
import style from './ingredient-page.module.scss';

const IngredientPage: React.FC = () => {
	const { id } = useParams();

	const currentIngredient = useAppSelector(getIngredientById(id));

	return (
		<div className={style.main}>
			<Gap size={30} />
			<header className={style.header}>
				<p className='text text_type_main-large'>Детали ингредиента</p>
			</header>
			<IngredientDetails item={currentIngredient} />
		</div>
	);
};

export default IngredientPage;
