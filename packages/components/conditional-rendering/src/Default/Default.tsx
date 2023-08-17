import React, { memo } from 'react';
import type { DefaultProps } from './types';

const Default: React.FC<DefaultProps> = ({ children }) => {
    return children;
};

export default memo(Default);
