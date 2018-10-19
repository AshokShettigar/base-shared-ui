## Inline notification
#### Usage
```js
import { InlineNotification } from 'platform-common-ui';
```
```js
<InlineNotification
    type={type}
    onClose={handleOnClose}
>
    <InlineNotification.Title>{title}</InlineNotification.Title>
    <InlineNotification.Message>{message}</InlineNotification.Message>
</InlineNotification>
```

#### Description
Inline Notification is useful in displaying variety of messages with different props type, onClose etc. as per Continuum theme.

#### Properties
Name       | Type               | Required | Default     | Description       
:--------- | :----------------- | :------: | :-----:     | :-----------
type       | `string`           | `Y`      | 'message'   | Type of the button, one of 'message', 'info', 'warning', 'error' or 'success'
onClose    | `func`             | -        | -           | Callback function for close event