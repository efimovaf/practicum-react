export const getStatusText = (status: string) => {
	switch (status) {
		case 'done':
			return 'Выполнен';
		case 'created':
			return 'Создан';
		case 'pending':
			return 'Готовится';
		default:
			return '';
	}
};

export const getStatusColor = (status: string) => {
	switch (status) {
		case 'done':
			return '#00CCCC';
		default:
			return 'unset';
	}
};
