# useWhyDidYouUpdate

---

## Installation

```sh
yarn add @phenomenon-hooks/use-why-did-you-update
```

or

```sh
npm i @phenomenon-hooks/use-why-did-you-update
```

---

## Usage

```jsx
import React from 'react';
import { useWhyDidYouUpdate } from '@phenomenon-hooks/use-why-did-you-update';

const Component: React.FC = () => {
    const [count, setCount] = React.useState(0);
    useWhyDidYouUpdate('Component', { count });

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
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
useWhyDidYouUpdate('some-name', props);
```

### Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `some-name` | `string` | Name of the component. Will be displayed in the console. |
| `props` | `Record<string, any>` | Object with props that will be displayed in the console when component rerenders |
