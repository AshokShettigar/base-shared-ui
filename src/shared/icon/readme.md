## Icon
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Icon } = shared;
```
```JSX
<Icon glyph="calendar" />
```

#### Description
Icon component helps to display glyphs of application.

#### Properties
Name            | Type               | Required | Default     | Description       
:-------------- | :----------------- | :------: | :---------: | :-----------
glyph           | `string`           | Y        | -           | Setup the glyphs kind 
size            | `string`           | -        | medium      | Setup the glyphs size
controlled      | `boolean`          | -        | true        | Makes the icon controlled
active          | `boolean`          | -        | false       | Makes the icon active
disabled        | `boolean`          | -        | false       | Makes the icon disabled
renderer        | `boolean`          | -        | true        | Render Icon to the DOM
hidden          | `boolean`          | -        | false       | Hide Icon in the DOM
className       | `string`           | -        | undefined   | Allows customizing styling of the component
glyphClassName  | `string`           | -        | undefined   | Allows customizing styling of the glyph
onClick         | `func`             | -        | func        | Event occurs after clicked on an element
