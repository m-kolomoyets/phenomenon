# UseDebounce

---

## Installation

```bash
yarn add @phenomenon-hooks/use-debounce
```

or

```bash
npm i @phenomenon-hooks/use-debounce
```

---

## Usage

```jsx
import React from 'react';
import { useDebounce } from '@phenomenon-hooks/use-debounce';

const Component: React.FC = () => {
    const [value, setValue] = React.useState('');
    const debouncedValue = useDebounce(value, 500);

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>Debounced value: {debouncedValue}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const debouncedValue = useDebounce(value, 500);
```

### Arguments

| Argument | Type     | Description                                             |
| -------- | -------- | ------------------------------------------------------- |
| `value`  | `T`      | Value to debounce. (Generic)                            |
| `delay`  | `number` | Debounce delay in milliseconds. Default value is `300`. |

### Returns

| Return value | Type | Description                |
| ------------ | ---- | -------------------------- |
| `value`      | `T`  | Debounced value. (Generic) |
