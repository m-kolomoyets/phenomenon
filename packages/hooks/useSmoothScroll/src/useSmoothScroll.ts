import { useEffect } from 'react';
import { polyfill } from 'smoothscroll-polyfill';

export const useSmoothScroll = () => {
    useEffect(() => {
        return polyfill();
    }, []);
};
