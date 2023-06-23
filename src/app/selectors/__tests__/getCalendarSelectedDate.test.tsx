import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getCalendarSelectedDate } from '../getCalendarSelectedDate.ts';
import { setNavigationFilter } from '../../../domain/store/navigationFilter/setNavigationFilter.ts';
import { createCategoryNavigationFilter } from '../../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';

type GetNavigationPanelItemProps = ReturnType<typeof getCalendarSelectedDate>;

const root = createRoot(document.createElement('div'));
let result: GetNavigationPanelItemProps | undefined = undefined;

beforeAll(() => {
    resetStore();
    result = undefined;
});

const onHookCall = () => {
    result = getCalendarSelectedDate();
};

describe('getCalendarSelectedDate', () => {
    it('должен вернуть дату если она выбрана в календаре в панели навигации', () => {
        act(() => {
            root.render(<TestComponent hook={onHookCall} />);
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(getTodayDate());
    });

    it('должен вернуть undefined если активен фильтр или категория', () => {
        act(() => {
            setNavigationFilter(createCategoryNavigationFilter(1, 'Дом'));
            root.render(<TestComponent hook={onHookCall} />);
        });

        expect(result).toBeUndefined();
    });
});
