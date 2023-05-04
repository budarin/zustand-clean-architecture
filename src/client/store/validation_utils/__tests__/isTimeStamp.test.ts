import { isTimeStamp } from '../isTimeStamp.ts';

describe('isTimeStamp', () => {
    test('should return true for integer inputs', () => {
        expect(isTimeStamp(100000)).toBe(true);
    });

    test('should return false for non-integer inputs', () => {
        expect(isTimeStamp('string')).toBe(false);
        expect(isTimeStamp(10.5)).toBe(false);
        expect(isTimeStamp(true)).toBe(false);
    });
});
