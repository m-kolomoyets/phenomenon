import { useState, useEffect } from 'react';
import { useDebounce } from '@phenomenon-hooks/use-debounce';

export const useDebouncedState = <T>(initialValue: T, delay = 300) => {
    const [value, setValue] = useState(initialValue);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return [value, debouncedValue, setValue] as const;
};
