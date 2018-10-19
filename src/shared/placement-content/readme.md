## PlacementContent
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Placement, PlacementContent  } = shared;
```
```JSX
  <Placement
      isOpen
      target={<Button size="small" onClick={e => {}}>Placement</Button>}
      onDismiss={e => {}}
  >
      {({ updatePosition, position }) => <PlacementContent position={position}>Content</PlacementContent>}
  </Placement>
```

#### Description
PlacementContent component is useful in displaying drop-down content with styles.

#### Properties
Name                | Type               | Required | Default        | Description
:---------          | :----------------- | :------: | :-----:        | :-----------
children            | `node`             | `Y`      | -              | Renders styled drop-down content
position            | `string`           | `Y`      | -              | Setup position depend on Target
offset              | `string`           | -        | `8px`          | Setup offset from Target 
className           | `string`           | -        | `undefined`    | Allows customizing styling of the PlacementContent
