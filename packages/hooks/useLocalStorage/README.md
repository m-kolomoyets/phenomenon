# useLocalStorage

---

## Installation

```bash
yarn add @phenomenon-hooks/use-local-storage
```

or

```bash
npm i @phenomenon-hooks/use-local-storage
```

---

## Usage

```jsx
import React from 'react';
import { useLocalStorage } from '@phenomenon-hooks/use-local-storage';

const Component: React.FC = () => {
    const [value, setValue] = useLocalStorage('key', 'value');

    return (
        <div>
            <p>Value: {value}</p>
            <button
                onClick={() => {
                    setValue('new value');
                }}
            >
                Set new value
            </button>
        </div>
    );
};
```
