import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getCalendarSelectedDate } from '../getCalendarSelectedDate.ts';
import { setNavigationFilter } from '../../../domain/store/navigationFilter/setNavigationFilter.ts';
import { createCategoryNavigationFilter } from '../../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getCalendarSelectedDate', () => {
    it('должен вернуть дату если она выбрана в календаре в панели навигации', () => {
        const { result } = renderHook(() => {
            return getCalendarSelectedDate();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(getTodayDate());
    });

    it('должен вернуть undefined если активен фильтр или категория', () => {
        const { result } = renderHook(() => {
            setNavigationFilter(createCategoryNavigationFilter(1, 'Дом'));
            return getCalendarSelectedDate();
        });

        expect(result.current).toBeUndefined();
    });
});
