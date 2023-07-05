# usePrevious

---

## Installtion

```bash
yarn add @phenomenon-hooks/use-previous
```

or

```bash
npm i @phenomenon-hooks/use-previous
```

---

## Usage

```jsx
import React from 'react';
import { usePrevious } from '@phenomenon-hooks/use-previous';

const Component: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const prevValue = usePrevious(value);

    return (
        <div>
            <p>Current value: {value}</p>
            <p>Previous value: {prevValue}</p>
            <button
                onClick={() => {
                    setValue((prev) => prev + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
};
```

---

## Anatomy

```jsx
const prevValue = usePrevious(value);
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `value`  | `T`  | start value |

### Returns

| Return value | Type | Description          |
| ------------ | ---- | -------------------- |
| `prevValue`  | `T`  | previous state value |
