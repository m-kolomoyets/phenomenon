import React, { memo } from 'react';
import type { SwitchProps } from './types';
import { Default, type DefaultProps } from '../Default';
import { Case, type CaseProps } from '../Case';

const Switch: React.FC<SwitchProps> = ({ children }) => {
    let matchedChild: React.ReactNode | null = null;
    let defaultCase: React.ReactNode | null = null;

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement<CaseProps | DefaultProps>(child)) {
            return child;
        }
        if (!matchedChild && child.type === Case) {
            const { condition } = (child as React.ReactElement<CaseProps>).props;

            if (condition) {
                matchedChild = child;
            }
        } else if (!defaultCase && child.type === Default) {
            defaultCase = child as React.ReactElement<DefaultProps>;
        }
    });

    return matchedChild ?? defaultCase ?? null;
};

export default memo(Switch);
