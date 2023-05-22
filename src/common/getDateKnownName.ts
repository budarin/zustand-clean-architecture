import { getDatesDiffInDays } from './getDatesDiffInDays';

export function getDateKnownName(date: Date) {
    const diff = getDatesDiffInDays(date, new Date());

    switch (diff) {
        case 0:
            return 'Сегодня';
        case 1:
            return 'Завтра';
        case 2:
            return 'Послезавтра';
        case -1:
            return 'Вчера';
        case -2:
            return 'Позавчера';

        default:
            return '';
    }
}
