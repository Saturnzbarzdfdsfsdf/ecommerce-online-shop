import { useCallback } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '../../../app/store';

// обработки событий прокрутки колесика мышки
export const useWheelScroll = () => {
	return useCallback((event: React.WheelEvent<HTMLDivElement>) => {
		const target = event.currentTarget;
		if (
			(event.deltaY > 0 &&
				target.scrollHeight > target.scrollTop + target.clientHeight) ||
			(event.deltaY < 0 && target.scrollTop > 0)
		) {
			event.stopPropagation();
		}
	}, []);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
