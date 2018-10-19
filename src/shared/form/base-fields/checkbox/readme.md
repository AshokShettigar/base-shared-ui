## Checkbox
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Checkbox } = shared;
```
```JSX
<Checkbox />
```

#### Description
Checkbox component permits the user to make a binary choice.

#### Properties
Name                  | Type               | Required | Default     | Description       
:---------------------| :----------:       | :------: | :-----:     | :-----------
id                    | `string`           | `-`      | undefined   | Setup the Checkbox's id
name                  | `string`           | `-`      | undefined   | Setup the Checkbox's name
value                 | `string`           | `-`      | undefined   | Setup the Checkbox's value
children              | `node`             | `-`      | undefined   | Displays the Checkbox's content
error                 | `string`           | `-`      | undefined   | Displays the Checkbox's error
autoFocus             | `bool`             | `-`      | false       | Makes the Checkbox's in focused
indeterminate         | `bool`             | `-`      | false       | Displays the indeterminate Checkbox 
multiple              | `bool`             | `-`      | false       | Displays the multiple Checkbox 
checked               | `bool`             | `-`      | false       | Displays the checked Checkbox 
disabled              | `bool`             | `-`      | false       | Displays the disabled Checkbox 
readOnly              | `bool`             | `-`      | false       | Displays the readOnly Checkbox 
hidden                | `bool`             | `-`      | false       | Makes the Checkbox's hidden
rendered              | `bool`             | `-`      | true        | Render Button to the DOM
className             | `string`           | `-`      | undefined   | Allows customizing styling of the component
labelClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the Checkbox's label
innerRef              | `func`             | `-`      | undefined   | Get a reference to the DOM element
onChange              | `func`             | `-`      | undefined   | Runs when the value of the field changes


