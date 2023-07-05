# useIsClient

---

## Installation

```bash
yarn add @phenomenon-hooks/use-is-client
```

or

```bash
npm i @phenomenon-hooks/use-is-client
```

---

## Usage

```jsx
import React from 'react';
import { useIsClient } from '@phenomenon-hooks/use-is-client';

const Component: React.FC = () => {
    const isClient = useIsClient();

    return (
        <div>
            <p>Is client: {isClient ? 'yes' : 'no'}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const isClient = useIsClient();
```

### Returns

| Return value | Type      | Description                |
| ------------ | --------- | -------------------------- |
| `isClient`   | `boolean` | Is code running on client. |
