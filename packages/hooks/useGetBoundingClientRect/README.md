# useGetBoundingClientRect

---

## Installation

```bash
yarn add @phenomenon-hooks/use-get-bounding-client-rect
```

or

```bash
npm i @phenomenon-hooks/use-get-bounding-client-rect
```

---

## Usage

```jsx
import React from 'react';
import { useGetBoundingClientRect } from '@phenomenon-hooks/use-get-bounding-client-rect';

const Component: React.FC = () => {
    const ref = React.useRef(null);
    const [clientRect] = useGetBoundingClientRect(ref);

    const { top, right, bottom, left, width, height } = clientRect;

    return (
        <div>
            <div ref={ref}>Some content</div>
            <p>Top: {top}</p>
            <p>Right: {right}</p>
            <p>Bottom: {bottom}</p>
            <p>Left: {left}</p>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
};
```

---

## Anatomy

```jsx
const [clientRect, startToSetClientRect] = useGetBoundingClientRect(ref);
```

### Arguments

| Argument | Type               | Description                            |
| -------- | ------------------ | -------------------------------------- |
| `ref`    | `Ref<HTMLElement>` | React ref object of element. (Generic) |

### Returns

| Return value           | Type       | Description                                           |
| ---------------------- | ---------- | ----------------------------------------------------- |
| `clientRect`           | `DOMRect`  | ClientRect object of element. (Generic)               |
| `startToSetClientRect` | `Function` | Function to start to set ClientRect object of element |
