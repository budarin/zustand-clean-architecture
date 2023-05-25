import { RefObject } from 'react';
import { useEventListener } from 'usehooks-ts';

export function useKeyDownToClickEvent<T extends HTMLElement>(ref: RefObject<T>, keyCodes: string[]): void {
    const onKeyDown = function (event: KeyboardEvent) {
        if (keyCodes.includes(event.code)) {
            // event.preventDefault();
            (document.activeElement as HTMLElement).click();
        }
    };

    useEventListener('keydown', onKeyDown, ref);
}
