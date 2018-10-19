## Icon
#### Usage
```js
import { Icon } from 'platform-common-ui';
```
```js
<Icon
    size="extra-small"
    icon="edit"
/>
```

#### Description
Icon component is useful in displaying variety of icons with different props like size, icon etc. as per Continuum theme.

#### Properties
Name       | Type               | Required | Default        | Description       
:--------- | :----------------- | :------: | :-----:        | :-----------
icon       | `string`           | `Y`      | -              | Icon id to be displayed
className  | `string`           | -        | -              | Add additional style class to the Icon component
size       | `string`           | -        | 'extra-small'  | Size of the button, one of 'ultra-small', 'extra-small', 'small', 'medium', 'large' or 'extra-large' sizes 
onClick    | `func`             | -        | -              | Callback function for click event
spriteUrl  | `string`           | -        | -              | Sprite Url to reference while displaying icons