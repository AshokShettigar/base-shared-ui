## Modal
#### Usage
```JSX
import { shared } from 'platform-common-ui';
const { Modal } = shared;
```
```JSX
<Modal
        isOpen,
        title="Modal title",
        sidebar="Modal sidebar",
        footer=(
            <ModalFooterElement
                submitLabel="Submit"
                dismissLabel="Cancel"
                onSubmit={() => {}}
                onDismiss={() => {}}
            />
        ),
        onDismiss={() => {}} 
>
    Modal Content
</Modal>
```

#### Description
Modal dialog component.

#### Properties
Name                  | Type         | Required     | Default     | Description       
:---------------------| :----------: | :----------: | :-----:     | :-----------
isOpen                | `bool`       | `-`          | false       | Open the Modal
width                 | `string`     | `-`          | undefined   | Allows customize the Modal width
height                | `string`     | `-`          | undefined   | Allows customize the Modal height
className             | `string`     | `-`          | undefined   | Allows customize the Modal styles
overlayClassName      | `string`     | `-`          | undefined   | Allows customize the Modal overlay styles
contentClassName      | `string`     | `-`          | undefined   | Allows customize the Modal content styles
bodyOpenClassName     | `string`     | `modal-open` | undefined   | Allows customize the Modal body styles
children              | `node`       | `-`          | undefined   | Renders the Modal content
position              | `string`     | `bottom`     | undefined   | Allows setup the Modal placement
title                 | `node`       | `-`          | null        | Display the Modal title
header                | `node`       | `-`          | null        | Display the Modal header
sidebar               | `node`       | `-`          | null        | Display the Modal sidebar
footer                | `node`       | `-`          | null        | Display the Modal footer
rendered              | `bool`       | `-`          | true        | Renders the Modal component
onAfterOpen           | `fn`         | `-`          | undefined   | Event occurs after opening the Modal
onDismiss             | `fn`         | `-`          | undefined   | Event occurs after closing the Modal
