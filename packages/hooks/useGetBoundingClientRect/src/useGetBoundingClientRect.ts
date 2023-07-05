import { useState, useEffect } from 'react';

export const useGetBoundingClientRect = (
    ref: React.RefObject<HTMLElement>
): [DOMRect | undefined, (() => void) | undefined] => {
    const [clientRect, setClientRect] = useState<DOMRect>();
    const [startToSetClientRect, setStartToSetClientRect] = useState<() => void>();

    useEffect(() => {
        const $el = ref.current;

        if (!$el) {
            return;
        }

        const resizeHandler = () => {
            setClientRect($el.getBoundingClientRect());
        };

        resizeHandler();
        setStartToSetClientRect(() => {
            return resizeHandler;
        });

        window.addEventListener('resize', resizeHandler, { passive: true });

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [ref]);

    return [clientRect, startToSetClientRect];
};
