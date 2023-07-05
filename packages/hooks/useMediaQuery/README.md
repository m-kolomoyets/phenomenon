# useMediaQuery

---

## Installation

```bash
yarn add @phenomenon-hooks/use-media-query
```

or

```bash
npm i @phenomenon-hooks/use-media-query
```

---

## Usage

```jsx
import React from 'react';
import { useMediaQuery } from '@phenomenon-hooks/use-media-query';

const Component: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const isMediaQueryTrue = useMediaQuery('(max-width: 768px)');
```

### Arguments

| Argument | Type     | Description                                                                 |
| -------- | -------- | --------------------------------------------------------------------------- |
| `query`  | `string` | Media query string. (e.g. `'(max-width: 768px)'` or `'(min-width: 768px)'`) |

### Returns

| Return value       | Type      | Description                    |
| ------------------ | --------- | ------------------------------ |
| `isMediaQueryTrue` | `boolean` | Does media query match or not. |
