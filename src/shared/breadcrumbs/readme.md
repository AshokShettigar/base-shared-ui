## Breadcrumbs
#### Usage
```js
import { Breadcrumbs } from 'platform-common-ui';
```
```js
<Breadcrumbs 
    breadcrumbs={breadcrumbs} 
/>
```

#### Description
Breadcrumbs component is useful to diplay secondary navigation to the users in the web application, as per the Continuum theme,

#### Properties
Name            | Type               | Required | Default     | Description       
:-------------- | :----------------- | :------: | :-----:     | :-----------
breadcrumbs     | `array`            | `Y`      | -           | List of breadcrumb, breadcrumb object shape is as per the description below

#### 'steps' object properties
Name            | Type               | Required | Default            | Description       
:-------------- | :----------------- | :------: | :-----:            | :-----------
title           | `string`           | `Y`      | -                  | Title of the breadcrumb
link            | `string`           | -        | -                  | Link of the breadcrumb
