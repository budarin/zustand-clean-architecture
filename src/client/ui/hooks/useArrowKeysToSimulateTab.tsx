import { RefObject } from 'react';
import { useEventListener } from 'usehooks-ts';

export function useArrowKeysToSimulateTab<T extends HTMLElement>(ref: RefObject<T>): void {
    const onKeyDown = function (event: KeyboardEvent) {
        if (!event.shiftKey && !event.ctrlKey) {
            if (event.code === 'ArrowRight') {
                event.preventDefault(); // Предотвращаем стандартное поведение перехода фокуса

                // Получаем ссылку на текущий активный элемент
                const currentElement = document.activeElement as HTMLElement;

                // Находим следующий элемент в DOM
                let nextElement = currentElement.nextElementSibling as HTMLElement | null;
                while (nextElement && !nextElement.focus) {
                    nextElement = nextElement.nextElementSibling as HTMLElement | null;
                }

                // Если найден следующий элемент, фокусируем его
                if (nextElement) {
                    nextElement.focus();
                }
            }

            if (event.code === 'ArrowLeft') {
                event.preventDefault(); // Предотвращаем стандартное поведение перехода фокуса

                // Получаем ссылку на текущий активный элемент
                const currentElement = document.activeElement as HTMLElement;

                // Находим следующий элемент в DOM
                let prevElement = currentElement.previousElementSibling as HTMLElement | null;
                while (prevElement && !prevElement.focus) {
                    prevElement = prevElement.previousElementSibling as HTMLElement | null;
                }

                // Если найден следующий элемент, фокусируем его
                if (prevElement) {
                    prevElement.focus();
                }
            }
        }
    };

    useEventListener('keydown', onKeyDown, ref);
}
