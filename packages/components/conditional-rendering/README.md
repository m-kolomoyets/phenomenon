# Conditional Rendering

---

## Installation

```bash
yarn add @phenomenon-components/conditional-rendering
```

or

```bash
npm i @phenomenon-components/conditional-rendering
```

---

## Usage

```jsx
import React from 'react';
import { Switch, Case, Default } from '@phenomenon-components/conditional-rendering';

const someConditionOne = true;
const someConditionTwo = false;
const someConditionThree = 10 > 20;

const Component: React.FC = () => {
    return (
        <Switch>
            <Case condition={someConditionOne}>
                <div>Condition One</div>
            </Case>
            <Case condition={someConditionTwo}>
                <div>Condition Two</div>
            </Case>
            <Case condition={someConditionThree}>
                <div>Condition Three</div>
            </Case>
            <Default>
                <div> Default</div>
            </Default>
        </Switch>
    );
};
```

---

## Anatomy

### Switch

```jsx
<Switch>
    <Case condition={...}>...</Case>
    ...
    <Default>...</Default>
</Switch>
```

### Props

#### Switch

| Argument   | Type                | Description                                |
| ---------- | ------------------- | ------------------------------------------ |
| `children` | `(Case, Default)[]` | Children (more `Case`, Only one `Default`) |

### Returns

| Return value | Type              | Description                 |
| ------------ | ----------------- | --------------------------- |
| `child`      | `React.ReactNode` | child displays by condition |
