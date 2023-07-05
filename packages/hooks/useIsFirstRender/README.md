# useIsFirstRender

---

# Installation

```bash
yarn add @phenomenon-hooks/use-is-first-render
```

or

```bash
npm i @phenomenon-hooks/use-is-first-render
```

---

# Usage

```jsx
import React from 'react';
import { useIsFirstRender } from '@phenomenon-hooks/use-is-first-render';

const Component: React.FC = () => {
    const isFirstRender = useIsFirstRender();

    return (
        <div>
            <p>Is first render: {isFirstRender ? 'yes' : 'no'}</p>
        </div>
    );
};
```

---

# Anatomy

```jsx
const isFirstRender = useIsFirstRender();
```

### Returns

| Return value    | Type      | Description                       |
| --------------- | --------- | --------------------------------- |
| `isFirstRender` | `boolean` | Was first render being performed. |
