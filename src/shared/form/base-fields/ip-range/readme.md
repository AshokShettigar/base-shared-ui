## IPv4FieldRange
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { IPv4RangeField } = shared;
```
```JSX
<IPv4RangeField value={{ start: '', end: '' }} label="IPv4RangeField" onChange={() => {}} />
```

#### Description
IPv4RangeField component is useful in enter range of IPv4 address.

#### Properties
Name                  | Type               | Required | Default     | Description
:---------------------| :----------:       | :------: | :-----:     | :-----------
label                 | `string`           | `-`      | undefined   | Displays field's label
name                  | `string`           | `-`      | undefined   | The field's name
value                 | `object`           | `Y`      | undefined   | Displays a field's value
error                 | `node`             | `-`      | undefined   | Displays a range field error
startIPRangeError     | `node`             | `-`      | undefined   | Displays a error of first part of field
endIPRangeError       | `node`             | `-`      | undefined   | Displays a error of second part of field
separator             | `node`             | `-`      | undefined   | Customize the separator symbol
autoFocus             | `bool`             | `-`      | false       | Makes field focused
disabled              | `bool`             | `-`      | false       | Makes field disabled
readOnly              | `bool`             | `-`      | false       | Makes field readOnly
required              | `bool`             | `-`      | false       | Makes field required
hidden                | `bool`             | `-`      | false       | Makes field hidden
hideErrorMessages     | `bool`             | `-`      | false       | Hides field error
dynamicWidth          | `bool`             | `-`      | false       | Allowed to dynamically change the width of inputs
className             | `string`           | `-`      | undefined   | Allows customizing styling of the component
labelClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the field's label
fieldWrapperClassName | `string`           | `-`      | undefined   | Allows customizing styling of the ip`s fields
fieldClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the fields
onBlur                | `func`             | `-`      | undefined   | Runs when leaves the field
onChange              | `func`             | `Y`      | undefined   | Runs when the value of the field changes
