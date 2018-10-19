## Coach Marks
#### Usage
```js
import { Coachmark } from 'platform-common-ui';
```
```js
<Coachmark
    type="tour"
    showCoachmark={this.state.displayCoachmark}
    tour={TOUR}
    steps={steps}
    onTourEnd={this.handleOnTourEnd}
/>
```

#### Description
Coach Marks help users learn about new features. This can be done using feature tours or informative messages using callouts.

Feature tours are quick walk-throughs of all the new features on a page. The tour goes through each feature step-by-step. This process allows the user to navigate from one feature to the next, while getting an overall grasp of the new features.

Feature tours are used when there are multiple features to tell the user about, and each feature is small enough to explain in a short description.

The process for writing these descriptions includes: (1) the Product Manager writes a first draft, and (2) the first draft is validated with the Documentation team.

#### Properties
Name            | Type               | Required | Default     | Description       
:-------------- | :----------------- | :------: | :-----:     | :-----------
type            | `string`           | `Y`      | `'tour'`    | Type of the Coach mark. One of the 'tour' or 'callout' types
showCoachmark   | `boolean`          | -        | `false`     | Show/hide coach marks
tour            | `object`           | -        | -           | Tour object as per the shape description below
callout         | `object`           | -        | -           | Callout object as per the shape description below
steps           | `array`            | -        | -           | List of steps, step object shape is as per the description below
onTourStart     | `func`             | -        | -           | Callback function triggered on tour start
onStepNext      | `func`             | -        | -           | Callback function triggered when user moves to next step
onDocumentClick | `func`             | -        | -           | Callback function triggered on click of document when tour or callout is being displayed
onTourEnd       | `func`             | -        | -           | Callback function triggered on tour end

#### 'tour' object properties
Name            | Type               | Required | Default            | Description       
:-------------- | :----------------- | :------: | :-----:            | :-----------
id              | `string`           | `Y`      | -                  | Unique id for the tour
bubblePadding   | `number`           | -        | -                  | Padding to be applied on tour bubble
arrowWidth      | `number`           | -        | -                  | Width of the arrow
bubbleWidth     | `number`           | -        | -                  | Width of the bubble
customRenderer  | `string`           | -        | -                  | Theme of the tour. Currently available values are 'rmm_bubble'(Continuum theme) or 'bubble_default'(Default hopscoth theme)
wrapperClass    | `string`           | -        | -                  | Class to be added on wrapper of tour bubble. Default class 'rmm-hopscotch' is required for Continuum theme. Extra classes can be added along with it if required to override any CSS
showPrevButton  | `bool`             | -        | -                  | Flag to show/hide previous button on tour

#### 'callout' object properties
Name            | Type               | Required | Default            | Description       
:-------------- | :----------------- | :------: | :-----:            | :-----------
id              | `string`           | `Y`      | -                  | Unique id for the callout
target          | `string`           | `Y`      | -                  | Target element selector to which the callout will point to (any valid CSS selector will work)
content         | `string`           | -        | -                  | Content message to be displayed in callout
placement       | `string`           | -        | -                  | Placement of the callout, one of 'top', 'bottom', 'left' or 'right' values
bubblePadding   | `number`           | -        | -                  | Padding to be applied on callout bubble
arrowWidth      | `number`           | -        | -                  | Width of the arrow
bubbleWidth     | `number`           | -        | -                  | Width of the bubble
xOffset         | `number`           | -        | -                  | Number of pixels bubble offsets on X-axis
yOffset         | `number`           | -        | -                  | Number of pixels bubble offsets on Y-axis
customRenderer  | `string`           | -        | -                  | Theme of the callout. Currently available values are 'rmm_bubble'(Continuum theme) or 'bubble_default'(Default hopscoth theme)
wrapperClass    | `string`           | -        | -                  | Class to be added on wrapper of callout bubble. Default class 'rmm-hopscotch' is required for Continuum theme. Extra classes can be added along with it if required to override any CSS
showCloseButton | `bool`             | -        | -                  | Flag to show/hide close button on callout
arrowColor      | `string`           | -        | -                  | CSS color code to override default arrow color if required

#### 'steps' object properties
Name            | Type               | Required | Default            | Description       
:-------------- | :----------------- | :------: | :-----:            | :-----------
target          | `string`           | `Y`      | -                  | Target element selector to which the step will point to (any valid CSS selector will work)
title           | `string`           | -        | -                  | Title of the step
content         | `string`           | -        | -                  | Content of the step
placement       | `string`           | -        | -                  | Placement of the step, one of 'top', 'bottom', 'left' or 'right' values
arrowColor      | `string`           | -        | -                  | CSS color code to override default arrow color if required
xOffset         | `number`           | -        | -                  | Number of pixels bubble offsets on X-axis
yOffset         | `number`           | -        | -                  | Number of pixels bubble offsets on Y-axis