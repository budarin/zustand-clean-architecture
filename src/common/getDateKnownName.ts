import { getTodayDate } from './getTodayDate';
import { getDatesDiffInDays } from './getDatesDiffInDays';

export function getDateKnownName(date: Date) {
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
