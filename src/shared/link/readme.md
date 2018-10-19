## Link
#### Usage
```javascript
import { Link } from 'platform-common-ui';
```
```js
<Link active>Link</Link>
```

#### Description
Link component is useful in displaying hyperlinks with different props like active, disabled, href etc. as per Continuum theme.

#### Properties
Name       | Type               | Required | Default | Description       
:--------- | :----------------- | :------: | :-----: | :-----------
children   | `node`             | `Y`      | -       | Content element of the Link
className  | `string`           | -        | -       | Add additional style class to the Link component
disabled   | `boolean`          | -        | false   | Disable the Link
href       | `string`           | -        | -       | URL to navigate on click of Link
target     | `string`           | -        | -       | Whether to follow the link in current tab or open a new tab. Use '_blank' to open new tab
active     | `boolean`          | -        | false   | Display active link
onClick    | `func`             | -        | -       | Callback function for click event