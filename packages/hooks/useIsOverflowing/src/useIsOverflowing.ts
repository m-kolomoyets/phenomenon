import { useEffect, useState } from 'react';

export const useIsOverflowing = (ref: React.RefObject<HTMLElement>, enabled = true) => {
    const [hasOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const $el = ref.current;

        if (!$el || !enabled) {
            return;
        }

        setIsOverflowing($el.scrollHeight > $el.clientHeight);
    }, [enabled, ref]);

    return hasOverflowing;
};
