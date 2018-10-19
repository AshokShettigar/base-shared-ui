## Label
#### Usage
```javascript
import { Label } from 'platform-common-ui';
```
```js
<Label color="primary">Label</Label>
```
 
#### Description
Label component is useful in displaying Continuum theme labels with different props like color, pill etc.

#### Properties
Name       | Type               | Required | Default     | Description       
:--------- | :----------------- | :------: | :-----:     | :-----------
children   | `node`             | `Y`      | -           | Content element of the label
className  | `string`           | -        | -           | Add additional style class to the label
color      | `string`           | -        | 'secondary' | Color of the label to be displayed. One of 'primary', 'secondary', 'danger', 'warning', 'intermediate', 'success', 'dark'
pill       | `boolean`          | -        | false       | Boolean flag to display label in pill shape
