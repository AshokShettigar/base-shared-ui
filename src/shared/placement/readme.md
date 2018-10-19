## Placement
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Placement, Button  } = shared;
```
```JSX
  <Placement
      isOpen={false}
      target={<Button size="small" onClick={e => {}}>Placement</Button>}
      onDismiss={e => {}}
  >
      {({ updatePosition, position }) => <div className={styles.content}>Content</div>}
  </Placement>
```

#### Description
Placement component is useful in displaying drop-down content by target.

#### Properties
Name                | Type               | Required | Default        | Description
:---------          | :----------------- | :------: | :-----:        | :-----------
target              | `any`              | -        | -              | Displays target component
modifiers           | `string`           | `Y`      | -              | Setup [options](https://popper.js.org/popper-documentation.html#modifiers)
position            | `string`           | -        | `auto-start`, `auto`, `auto-end`, `top-start`, `top`, `top-end`, `right-start`, `right`, `right-end`, `bottom-end`, `bottom`, `bottom-start`, `left-end`, `left`, `left-start`      | Setup the placement 
className           | `string`           | -        | `undefined`    | Allows customizing styling of the Placement
targetClassName     | `string`           | -        | `undefined`    | Allows customizing styling of the target component
contentClassName    | `string`           | -        | `undefined`    | Allows customizing styling of the Placement's content
children            | `fn`               | `Y`      | -              | Renders drop-down content
isOpen              | `boolean`          | `Y`      | -              | Makes drop-down open
rendered            | `boolean`          | -        | `true`         | Renders the Placement component
hidden              | `boolean`          | -        | `false`        | Hide the Placement component
onDismiss           | `func`             | `Y`      | -              | Event occurs after closing the drop-down content
