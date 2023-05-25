import { useEffect } from 'react';

export function useKeyDown(callback: () => void, keyCodes: string[]): void {
    const handler = ({ code }: KeyboardEvent) => {
        if (keyCodes.includes(code)) {
            callback();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handler);
        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, []);
}
