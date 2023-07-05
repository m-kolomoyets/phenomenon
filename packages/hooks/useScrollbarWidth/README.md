# useScrollbarWidth

---

## Installation

```sh
yarn add @phenomenon-hooks/use-scrollbar-width
```

or

```sh
npm i @phenomenon-hooks/use-scrollbar-width
```

---

## Usage

```jsx
import React from 'react';
import { useScrollbarWidth } from '@phenomenon-hooks/use-scrollbar-width';

const Component: React.FC = () => {
    const scrollbarWidth = useScrollbarWidth();

    return (
        <div>
            <p>Scrollbar width: {scrollbarWidth}px</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const scrollbarWidth = useScrollbarWidth();
```

### Returns

| Return value     | Type     | Description                |
| ---------------- | -------- | -------------------------- |
| `scrollbarWidth` | `number` | Scrollbar width in pixels. |
