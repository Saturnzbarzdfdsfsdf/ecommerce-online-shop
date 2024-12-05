// Функция для перемешивания массива

// алгоритм Фишера-Йетса
export const shuffle = <T>(arr: T[]): T[] => {
	const shuffled = [...arr];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

// Функция для построения URL с параметрами
export const buildUrl = (
	url: string,
	params: Record<string, string | number>
): string => {
	let urlWithParams = url;

	Object.entries(params).forEach(([key, value], i) => {
		const sign = !i ? '?' : '&';
		urlWithParams += `${sign}${key}=${value}`;
	});

	return urlWithParams;
};

// Функция для суммирования значений в массиве
export const sumBy = (arr: number[]): number => {
	return arr.reduce((prev, cur) => prev + cur, 0);
};
