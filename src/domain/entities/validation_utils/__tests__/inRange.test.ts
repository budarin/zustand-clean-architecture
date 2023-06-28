import { inRange } from '../inRange.ts';

describe('inRange', () => {
    it('возвращает true, если число находится в диапазоне', () => {
        expect(inRange(5, 1, 10)).toBe(true);
    });
    it('возвращает false, если число меньше минимального значения', () => {
        expect(inRange(0, 1, 10)).toBe(false);
    });
    it('возвращает false, если число больше максимального значения', () => {
        expect(inRange(15, 1, 10)).toBe(false);
    });
    it('возвращает true, если число равно минимальному значению', () => {
        expect(inRange(1, 1, 10)).toBe(true);
    });
    it('возвращает true, если число равно максимальному значению', () => {
        expect(inRange(10, 1, 10)).toBe(true);
    });
    it('работает корректно с отрицательными значениями', () => {
        expect(inRange(-5, -10, 10)).toBe(true);
        expect(inRange(-15, -10, -5)).toBe(false);
        expect(inRange(-10, -10, 10)).toBe(true);
    });
});
