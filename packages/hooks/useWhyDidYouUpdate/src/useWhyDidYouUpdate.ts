/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

export const useWhyDidYouUpdate = (name: string, props: Record<string, any>) => {
    const previousProps = useRef<Record<string, any>>();

    useEffect(() => {
        if (previousProps?.current) {
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            const changes: Record<
                string,
                {
                    from: any;
                    to: any;
                }
            > = {};

            allKeys.forEach((key) => {
                if (previousProps.current?.[key] !== props[key]) {
                    changes[key] = {
                        from: previousProps.current?.[key],
                        to: props[key],
                    };
                }
            });

            if (Object.keys(changes).length) {
                // eslint-disable-next-line no-console
                console.log('[why-did-you-update]', name, changes);
            }
        }

        previousProps.current = props;
    });
};
