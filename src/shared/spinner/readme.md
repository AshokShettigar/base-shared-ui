## Spinner
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Spinner } = shared;
```
```JSX
<Spinner />
```

#### Description
Spinner component helps to display the status of application.

#### Properties
Name             | Type               | Required | Default      | Description       
:--------------- | :----------------- | :------: | :----------: | :-----------
color            | `string`           | -        | currentColor | Setup the spinner's color 
size             | `string`           | -        | standard     | Setup the spinner's size
centered         | `boolean`          | -        | false        | Makes the spinner a full width and centered
renderer         | `boolean`          | -        | true         | Render Icon to the DOM
hidden           | `boolean`          | -        | false        | Hide Icon in the DOM
className        | `string`           | -        | undefined    | Allows customizing styling of the component
spinnerClassName | `string`           | -        | undefined    | Allows customizing styling of the spinner
