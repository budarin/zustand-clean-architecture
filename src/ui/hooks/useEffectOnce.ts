import { useEffect } from 'react';

export function useEffectOnce(callback: () => void) {
    useEffect(() => {
        let mounted = true;

        if (mounted) {
            callback();
        }

        return () => {
            mounted = false;
        };
    }, []);
}
