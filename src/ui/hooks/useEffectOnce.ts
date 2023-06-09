import { useEffect, useRef } from 'react';

export function useEffectOnce(callback: () => void) {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        if (isMounted.current) {
            callback();
        }

        return () => {
            isMounted.current = false;
        };
    }, []);
}
