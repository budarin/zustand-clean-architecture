import { RefObject } from 'react';
import { useEventListener } from 'usehooks-ts';

export function useArrowKeysToSimulateTab<T extends HTMLElement>(ref: RefObject<T>): void {
    const onKeyDown = function (event: KeyboardEvent) {
        if (!event.shiftKey && !event.ctrlKey) {
            if (event.code === 'ArrowRight') {
                event.preventDefault();

                let nextElement = (event.target as HTMLElement).nextElementSibling as HTMLElement | null;

                while (nextElement && !nextElement.focus) {
                    nextElement = nextElement.nextElementSibling as HTMLElement | null;
                }

                if (nextElement) {
                    nextElement.focus();
                    nextElement.click();
                }
            }

            if (event.code === 'ArrowLeft') {
                event.preventDefault();

                let prevElement = (event.target as HTMLElement).previousElementSibling as HTMLElement | null;

                while (prevElement && !prevElement.focus) {
                    prevElement = prevElement.previousElementSibling as HTMLElement | null;
                }

                if (prevElement) {
                    prevElement.focus();
                    prevElement.click();
                }
            }
        }
    };

    useEventListener('keydown', onKeyDown, ref);
}
