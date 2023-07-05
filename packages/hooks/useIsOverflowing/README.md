# useIsOverflowing

---

```bash
yarn add @phenomenon-hooks/use-is-overflowing
```

or

```bash
npm i @phenomenon-hooks/use-is-overflowing
```

---

## Usage

```jsx
import React from 'react';
import { useIsOverflowing } from '@phenomenon-hooks/use-is-overflowing';

const Component: React.FC = () => {
    const ref = React.useRef(null);
    const isOverflowing = useIsOverflowing(ref);

    return (
        <div style={{ height: '300px' }}>
            <div ref={ref} style={{ height: '350px' }}>
                Some content
            </div>
            <p>Is overflowing: {isOverflowing ? 'yes' : 'no'}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const isOverflowing = useIsOverflowing(ref);
```

### Arguments

| Argument | Type               | Description                            |
| -------- | ------------------ | -------------------------------------- |
| `ref`    | `Ref<HTMLElement>` | React ref object of element. (Generic) |

### Returns

| Return value    | Type      | Description                        |
| --------------- | --------- | ---------------------------------- |
| `isOverflowing` | `boolean` | Is element overflowing its parent. |
