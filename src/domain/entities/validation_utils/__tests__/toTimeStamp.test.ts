import { toTimeStamp } from '../toTimeStamp';

describe('Функция toTimeStamp', () => {
    it('должна возвращать переданное значение, если оно уже является целым числом', () => {
        expect(toTimeStamp(10)).toBe(10);
        expect(toTimeStamp(-5)).toBe(-5);
        expect(toTimeStamp(0)).toBe(0);
    });

    it('должна преобразовывать строковое значение в timestamp', () => {
        expect(toTimeStamp('2022-12-31T23:59:59.000Z')).toBe(1672531199000);
        expect(toTimeStamp('2019-01-01T00:00:00.000Z')).toBe(1546300800000);
    });

    it('должна возвращать undefined для значений, отличных от целых чисел и строк', () => {
        expect(toTimeStamp(10.5)).toBeUndefined();
        expect(toTimeStamp([])).toBeUndefined();
        expect(toTimeStamp({})).toBeUndefined();
        expect(toTimeStamp(true)).toBeUndefined();
        expect(toTimeStamp(null)).toBeUndefined();
        expect(toTimeStamp(undefined)).toBeUndefined();
    });
});
