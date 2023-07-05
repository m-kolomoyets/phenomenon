import { useState, useCallback, useEffect } from 'react';

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
    const readValue = useCallback((): T => {
        const item = localStorage.getItem(key);

        try {
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (_error) {
            return item ? (item as T) : initialValue;
        }
    }, [initialValue, key]);
    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: SetValue<T> = useCallback((value) => {
        const newValue = value instanceof Function ? value(storedValue) : value;

        if (newValue || typeof newValue === 'string' || typeof newValue === 'number') {
            localStorage.setItem(key, typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue));
        } else {
            localStorage.removeItem(key);
        }

        setStoredValue(newValue);
    }, [storedValue]);

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
};
