## Static sidebar
#### Usage
```js
import { StaticSideBar } from 'platform-common-ui';
```
```js
<StaticSideBar
    isOpen
    title
    onClose
    onOpen
    onBack
>
    Content
</StaticSideBar>
```

#### Description
Static side bar is a component to show content within it which remains on the page and can be opened on closed.

#### Properties
Name                | Type               | Required | Default     | Description
:-------------------| :----------------- | :------: | :-----:     | :-----------
children            | `node`             | -        | -           | Content element of the Static sidebar
title               | `node`             | -        | -           | Title of the Static sidebar
isExpand            | `string`           | -        | -           | Determines the expand state of Static sidebar. Component manages the state by himself. isExpand props can be passed if need to manage it outside.
classNames          | `string`           | -        | -           | Add additional style class to the Static sidebar component
titleClassNames     | `string`           | -        | -           | Add additional style class to the title element
headerClassNames    | `string`           | -        | -           | Add additional style class to the header element
contentClassNames   | `string`           | -        | -           | Add additional style class to the content element
backIconClassNames  | `string`           | -        | -           | Add additional style class to the back icon element
closeIconClassNames | `string`           | -        | -           | Add additional style class to the close icon element
onCollapse          | `func`             | -        | -           | Callback function which will be called after sidebar was collapsed
onExpand            | `func`             | -        | -           | Callback function which will be called after sidebar was expanded
onBack              | `func`             | -        | -           | Callback function which will be called after sidebar was navigated back. Determines when sidebar on the next step
