import { useRef, useEffect, useState, RefObject } from 'react';

type EventHandler = (event: Event) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: EventHandler,
    mouseEvent = 'mousedown',
) {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const eventListener = (event: Event) => {
            if (!enabled) {
                return;
            }

            const el = ref.current;
            if (!el || el.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener(mouseEvent, eventListener);

        return () => {
            document.removeEventListener(mouseEvent, eventListener);
        };
    }, [ref, handler, mouseEvent, enabled]);

    return { setEnabled };
}
