# useSetGlobalCustomProperty

---

## Installation

```bash
yarn add @phenomenon-hooks/use-set-global-custom-property
```

or

```bash
npm i @phenomenon-hooks/use-set-global-custom-property
```

---

## Usage

```jsx
import React from 'react';
import { useSetGlobalCustomProperty } from '@phenomenon-hooks/use-set-global-custom-property';

const Component: React.FC = () => {
    const setGlobalCustomProperty = useSetGlobalCustomProperty();

    return (
        <div style={{ backgroundColor: 'var(--color)' }}>
            <button
                onClick={() => {
                    setGlobalCustomProperty('--color', 'red');
                }}
            >
                Set global custom property
            </button>
        </div>
    );
};
```

---

## Anatomy

```jsx
const setGlobalCustomProperty = useSetGlobalCustomProperty();

setGlobalCustomProperty('--color', 'red');
```

### Returns

| Return value              | Type       | Description                                                           |
| ------------------------- | ---------- | --------------------------------------------------------------------- |
| `setGlobalCustomProperty` | `function` | Function that will set global custom property. (e.g. `--color: red;`) |
