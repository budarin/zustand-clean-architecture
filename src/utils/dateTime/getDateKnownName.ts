import { getTodayDate } from './getTodayDate.ts';
import { getDatesDiffInDays } from './getDatesDiffInDays.ts';

export function getDateKnownName(date: Date): 'сегодня' | 'завтра' | 'послезавтра' | 'вчера' | 'позавчера' | '' {
    const diff = getDatesDiffInDays(getTodayDate(), date);

    switch (diff) {
        case 0:
            return 'сегодня';
        case 1:
            return 'завтра';
        case 2:
            return 'послезавтра';
        case -1:
            return 'вчера';
        case -2:
            return 'позавчера';

        default:
            return '';
    }
}
