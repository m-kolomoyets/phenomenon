import React, { memo } from 'react';
import type { CaseProps } from './types';

const Case: React.FC<CaseProps> = ({ children }) => {
    return children;
};

export default memo(Case);
