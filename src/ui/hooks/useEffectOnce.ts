import React,{ useEffect, useRef } from 'react';

export function useEffectOnce(callback: () => void) {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        function start() {
            if (isMounted.current) {
                callback();
            }
        }

        start();

        return () => {
            isMounted.current = false;
        };
    }, []);
}
