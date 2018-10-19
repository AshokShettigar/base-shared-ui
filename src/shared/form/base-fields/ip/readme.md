## IPv4Field
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { IPv4Field } = shared;
```
```JSX
<IPv4Field label="IPField" onChange={() => {}} />
```

#### Description
IPv4Field component is useful in enter IPv4 address.

#### Properties
Name                  | Type               | Required | Default     | Description       
:---------------------| :----------:       | :------: | :-----:     | :-----------
label                 | `string`           | `-`      | undefined   | Displays field's label
name                  | `string`           | `-`      | undefined   | The field's name 
value                 | `string`           | `-`      | undefined   | Displays field's value
children              | `node`             | `-`      | undefined   | Displays field's content
error                 | `node`             | `-`      | undefined   | Displays field's error
autoFocus             | `bool`             | `-`      | false       | Makes field focused
disabled              | `bool`             | `-`      | false       | Makes field disabled
readOnly              | `bool`             | `-`      | false       | Makes field readOnly
required              | `bool`             | `-`      | false       | Makes field required
hidden                | `bool`             | `-`      | false       | Makes field hidden
hideErrorMessages     | `bool`             | `-`      | false       | Hides field error
className             | `string`           | `-`      | undefined   | Allows customizing styling of the component
labelClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the field's label
fieldWrapperClassName | `string`           | `-`      | undefined   | Allows customizing styling of the field's wrapper
fieldClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the field
contentClassName      | `string`           | `-`      | undefined   | Allows customizing styling of the field's content
onBlur                | `func`             | `-`      | undefined   | Runs when leaves the field
onChange              | `func`             | `Y`      | undefined   | Runs when the value of the field changes
