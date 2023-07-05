# useSetClassNameLater

---

## Installation

```bash
yarn add @phenomenon-hooks/use-set-class-name-later
```

or

```bash
npm i @phenomenon-hooks/use-set-class-name-later
```

---

## Usage

```jsx
import React from 'react';
import { useSetClassNameLater } from '@phenomenon-hooks/use-set-class-name-later';

const Component: React.FC = () => {
    const className = useSetClassNameLater('new-class-name', true);

    return (
        <div className={className}>
            <p>Class name: {className}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const className = useSetClassNameLater('new-class-name', true);
```

### Arguments

| Argument    | Type      | Description                                                 |
| ----------- | --------- | ----------------------------------------------------------- |
| `className` | `string`  | Class name that will be set after the delay.                |
| `canSet`    | `boolean` | If `true` className will be changes on and of `render tick` |

### Returns

| Return value | Type | Description |
| --- | --- | --- |
| `className` | `string` | Class name that will be set after the delay. (e.g. `new-class-name`). If `canSet` false - will be `empty string` |
