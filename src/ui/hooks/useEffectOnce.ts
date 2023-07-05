import { useEffect, useRef } from 'react';

export function useEffectOnce(callback: () => void): void {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        function start(): void {
            if (isMounted.current) {
                callback();
            }
        }

        start();

        return (): void => {
            isMounted.current = false;
        };
    }, []);
}
