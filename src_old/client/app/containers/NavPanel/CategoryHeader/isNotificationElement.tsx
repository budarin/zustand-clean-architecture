import { isString } from '../../../../../../src/domain/utils/validation/isString';

export function isNotificationElement(el: HTMLElement): boolean {
    let parent = el.parentElement;

    while (parent) {
        if (isString(parent?.className) && parent?.className.startsWith('Toastify')) {
            return true;
        }
        parent = parent.parentElement;
    }

    return false;
}
