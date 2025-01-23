import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './modal-overlay';
import style from './modal.module.scss';

export interface IModal {
	title?: string;
	children: React.ReactNode;
	onClose(): void;
}

const PORTAL_ID = 'portal';

// получение / создание div для портала
const getPortal = (id: string) => {
	let portal = document.getElementById(id);

	if (!portal) {
		portal = document.createElement('div');
		portal.setAttribute('id', id);

		document.body.appendChild(portal);
	}

	return portal;
};

const Modal: React.FC<IModal> = ({ children, title, onClose }) => {
	useEffect(() => {
		const eventHandler = (event: KeyboardEvent) => {
			// Esc
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', eventHandler);

		return () => document.removeEventListener('keydown', eventHandler);
	}, [onClose]);

	const content = (
		<>
			<div data-cy='modal' className={style.main}>
				<header className={style.header}>
					<p className='text text_type_main-large'>{title}</p>
					<CloseIcon
						className={style.closeIcon}
						type='primary'
						onClick={onClose}
					/>
				</header>

				<div>{children}</div>
			</div>

			<ModalOverlay onClose={onClose} />
		</>
	);

	return createPortal(content, getPortal(PORTAL_ID));
};

export default Modal;
