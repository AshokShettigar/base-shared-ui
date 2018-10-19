## List
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { List  } = shared;
```
```JSX
  <List
      list={[{ name: 'Item'}]},
      onSelect={() => {}}
  />
```

#### Description
List component is useful in displaying selectable list of string.

#### Properties
Name                | Type               | Required | Default        | Description
:---------          | :----------------- | :------: | :-----:        | :-----------
showSublistTitle    | `bool`             | `N`      | -              |
showCount           | `bool`             | `N`      | -              |
isSubList           | `bool`             | `N`      | -              |
title               | `string`           | `N`      | -              |
label               | `string`           | `N`      | -              |
list                | `array`            | `Y`      | -              |
subList             | `func`             | -        | -              |
className           | `string`           | -        | -              |
subListPosition     | `string`           | -        | -              |
listClassName       | `string`           | -        | -              |
onKeyDown           | `func`             | -        | -              |
onSelect            | `func`             | 'Y'      | -              |
onMouseEnter        | `func`             | -        | -              |
onMouseLeave        | `func`             | -        | -              |
