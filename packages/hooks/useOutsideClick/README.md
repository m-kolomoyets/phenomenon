# useOutsideClick

---

## Installation

```bash
yarn add @phenomenon-hooks/use-outside-click
```

or

```bash
npm i @phenomenon-hooks/use-outside-click
```

---

## Usage

```jsx
import React from 'react';
import { useOutsideClick } from '@phenomenon-hooks/use-outside-click';

const Component: React.FC = () => {
    const [isOutsideClick, setIsOutsideClick] = React.useState(false);
    const ref = useOutsideClick(() => {
        setIsOutsideClick(true);
    });

    return (
        <div>
            {/* other markup */}
            <div ref={ref}>
                <p>Click outside of this element to see the result</p>
            </div>
        </div>
    );
};
```

---

## Anatomy

```jsx
const ref = useOutsideClick(() => {
    setIsOutsideClick(true);
});
```

### Arguments

| Argument    | Type       | Description                                                                   |
| ----------- | ---------- | ----------------------------------------------------------------------------- |
| `onOutside` | `function` | Callback function that will be called when user clicks outside of the element |

### Returns

| Return value | Type | Description |
| --- | --- | --- |
| `ref` | `React.RefObject<HTMLElement>` | React ref object that should be passed to the element that should be tracked |
