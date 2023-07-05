# useToggle

---

## Installation

```bash
yarn add @phenomenon-hooks/use-toggle
```

or

```bash
npm i @phenomenon-hooks/use-toggle
```

---

## Usage

```jsx
import React from 'react';
import { useToggle } from '@phenomenon-hooks/use-toggle';

const Component: React.FC = () => {
    const [isToggled, toggle, setIsToggled] = useToggle(false);

    return (
        <div>
            <p>Is toggled: {isToggled ? 'true' : 'false'}</p>
            <button onClick={toggle}>Toggle</button>
            <button
                onClick={() => {
                    setIsToggled(true);
                }}
            >
                Set True
            </button>
            <button
                onClick={() => {
                    setIsToggled(false);
                }}
            >
                Set False
            </button>
        </div>
    );
};
```

---

## Anatomy

```jsx
const [isToggled, toggle, setIsToggled] = useToggle(false);
```

### Arguments

| Argument | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `value`  | `boolean` | initial value (default: `false`) |

### Returns

| Return value   | Type                       | Description                                               |
| -------------- | -------------------------- | --------------------------------------------------------- |
| `isToggled`    | `boolean`                  | Current value.                                            |
| `toggle`       | `() => void`               | Function that will toggle value                           |
| `setIsToggled` | `(value: boolean) => void` | Function that will set value. (e.g. `setIsToggled(true)`) |
