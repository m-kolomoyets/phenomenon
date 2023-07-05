# UseDebouncedState

---

## Installation

```bash
yarn add @phenomenon-hooks/use-debounced-state
```

or

```bash
npm i @phenomenon-hooks/use-debounced-state
```

---

## Usage

```jsx
import React from 'react';
import { useDebouncedState } from '@phenomenon-hooks/use-debounced-state';

const Component: React.FC = () => {
    const [value, debouncedValue, setValue] = useDebouncedState('', 500);

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
const [value, debouncedValue, setValue] = useDebouncedState('', 500);
```

### Arguments

| Argument | Type     | Description                                             |
| -------- | -------- | ------------------------------------------------------- |
| `value`  | `T`      | Value to debounce. (Generic)                            |
| `delay`  | `number` | Debounce delay in milliseconds. Default value is `300`. |

### Returns

| Return value     | Type                                      | Description                  |
| ---------------- | ----------------------------------------- | ---------------------------- |
| `value`          | `T`                                       | Value to debounce. (Generic) |
| `debouncedValue` | `T`                                       | Debounced value. (Generic)   |
| `setValue`       | `React.Dispatch<React.SetStateAction<T>>` | Value setter. (Generic)      |
