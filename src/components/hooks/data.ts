import { useCallback, useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { IData } from '../interfaces/data';
import { DATA_URL } from '../constant/system';

/** Хук для получения данных. */
export const useData = () => {
	const [loading, setIsLoadingData] = useState(false);
	const [data, setData] = useState<IData[]>([]);
	const [buns, setBuns] = useState<IData[]>([]);
	const [sauces, setSauces] = useState<IData[]>([]);
	const [mains, setMains] = useState<IData[]>([]);
	const [bunCurrent, setBunCurrent] = useState<IData | undefined>();

	const filterDataByType = useCallback((data: IData[], type: string) => {
		return data.filter((it) => it.type === type);
	}, []);

	useEffect(() => {
		const init = () => {
			setIsLoadingData(true);
			fetch(DATA_URL)
				.then((response) => {
					if (!response.ok) {
						setIsLoadingData(false);
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((result) => {
					if (result.success) {
						const resultData = result.data as IData[];
						const bunsFilter = filterDataByType(resultData, 'bun');
						const saucesFilter = filterDataByType(resultData, 'sauce');
						const mainsFilter = filterDataByType(resultData, 'main');

						unstable_batchedUpdates(() => {
							setBuns(bunsFilter);
							setBunCurrent(bunsFilter.length > 0 ? bunsFilter[1] : undefined);
							setSauces(saucesFilter);
							setMains(mainsFilter);
							setData(result.data);
						});
					} else {
						throw new Error('Result data was not success');
					}
					setIsLoadingData(false);
				})
				.catch((error) => {
					setIsLoadingData(false);
					console.error(
						'There has been a problem with your fetch operation:',
						error
					);
				});
		};

		init();
	}, []);

	return {
		isLoadingData: loading,
		data,
		buns,
		sauces,
		mains,
		bunCurrent,
	};
};
