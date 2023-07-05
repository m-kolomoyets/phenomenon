# UseDocumentLockScrollY

---

## Installation

```bash
yarn add @phenomenon-hooks/use-document-lock-scroll-y
```

or

```bash
npm i @phenomenon-hooks/use-document-lock-scroll-y
```

---

## Usage

```jsx
import React from 'react';
import { useDocumentLockScrollY } from '@phenomenon-hooks/use-document-lock-scroll-y';

const Component: React.FC = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState(false);
    const { lockDocumentScrollY, unlockDocumentScrollY, checkIsLockDocumentScrollY } = useDocumentLockScrollY();

    const isLockingScrollY = checkIsLockDocumentScrollY();

    useEffect(() => {
        if (isMenuOpened) {
            lockDocumentScrollY();
            // ...some code
        } else {
            unlockDocumentScrollY();
            // ...some code
        }
    }, [isMenuOpened]);

    return (
        <div>
            <p>Scroll is {isLockingScrollY ? 'locked' : 'unlocked'}</p>
            <button
                onClick={() => {
                    setIsLocked(!isLocked);
                }}
            >
                Toggle scroll lock
            </button>
        </div>
    );
};
```

---

## Anatomy

```jsx
const { lockDocumentScrollY, unlockDocumentScrollY, checkIsLockDocumentScrollY } = useDocumentLockScrollY();
```

### Returns

| Return value | Type | Description |
| --- | --- | --- |
| `lockDocumentScrollY` | `() => void` | Locks document scroll. |
| `unlockDocumentScrollY` | `() => void` | Unlocks document scroll. |
| `checkIsLockDocumentScrollY` | `() => boolean` | Checks if document scroll is locked. Returns `true` if scroll is locked. |
