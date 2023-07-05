# useIsMounted

---

## Installation

```sh
yarn add @phenomenon-hooks/use-is-mounted
```

or

```sh
npm i @phenomenon-hooks/use-is-mounted
```

---

## Usage

```jsx
import React from 'react';
import { useIsMounted } from '@phenomenon-hooks/use-is-mounted';

const Component: React.FC = () => {
    const isMounted = useIsMounted();

    return (
        <div>
            <p>Is mounted: {isMounted ? 'yes' : 'no'}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const isMounted = useIsMounted();
```

### Returns

| Return value | Type      | Description                     |
| ------------ | --------- | ------------------------------- |
| `isMounted`  | `boolean` | Is component mounted on client. |
