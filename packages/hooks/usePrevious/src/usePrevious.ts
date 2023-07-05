import { useRef, useEffect } from 'react';

export const usePrevious = <T>(value: T): T => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref: any = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
