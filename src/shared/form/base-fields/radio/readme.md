## Radio
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Radio } = shared;
```
```JSX
<Radio id="some-id" />
```

#### Description
Radio component permits the user to make a single choice.

#### Properties
Name                  | Type               | Required | Default     | Description       
:---------------------| :----------:       | :------: | :-----:     | :-----------
id                    | `string`           | `-`      | uuid()      | Setup the Radio's id
name                  | `string`           | `-`      | undefined   | Setup the Radio's name
value                 | `string`           | `-`      | undefined   | Setup the Radio's value
children              | `node`             | `-`      | undefined   | Displays the Radio's content
error                 | `string`           | `-`      | undefined   | Displays the Radio's error
checked               | `bool`             | `-`      | false       | Displays the checked Radio 
disabled              | `bool`             | `-`      | false       | Displays the disabled Radio 
hidden                | `bool`             | `-`      | false       | Makes the Radio's hidden
rendered              | `bool`             | `-`      | true        | Render Button to the DOM
className             | `string`           | `-`      | undefined   | Allows customizing styling of the component
labelClassName        | `string`           | `-`      | undefined   | Allows customizing styling of the Radio's label
containerClassName    | `string`           | `-`      | undefined   | Allows customizing styling of the Radio's content
innerContainerRef     | `func`             | `-`      | undefined   | Get a reference to the DOM component
onChange              | `func`             | `-`      | undefined   | Runs when the value of the field changes
