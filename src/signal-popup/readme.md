## Signal Popup
#### Usage
```js
import { SignalPopupWrapper } from 'platform-common-ui';
```
```js
<SignalPopupWrapper
    popupConfig={{
        Component: CountryPopup
    }}
    buttonConfig={{
        Component: CountryCell
    }}
    parentElm={this.parentElemRef}
/>
```

#### Usage in AgGrid
```js
import { AgGridReact, agGridDefaultProps, SignalPopupWrapper } from 'platform-common-ui';
```
```js
... // Constructor
this.state = {
    columnDefs: [
        { headerName: 'Athlete', field: 'athlete', width: 150 },
        { headerName: 'Age', field: 'age', width: 90 },
        {
            headerName: 'Country',
            field: 'country',
            width: 120,
            cellRendererFramework: SignalPopupWrapper,
            cellRendererParams: {
                popupConfig: {
                    Component: CountryPopup // Component of Popup content
                },
                buttonConfig: {
                    Component: CountryCell  // Component that behaves as trigger of popup
                },
                parentElm: this.agGridRef   // Parent element(here AgGrid) reference
            }
        },
        ...
    ],
    ...
};
```
```js
// inside render method
<AgGridReact
    {...agGridDefaultProps}
    columnDefs={this.state.columnDefs}
    rowData={this.state.rowData}
    ref={this.setAgGridRef}
/>
```

#### Description
SignalPopupWrapper component is useful in displaying popup with content in AgGrid or outside it.

#### Properties
Name          | Type               | Required | Default  | Description       
:---------    | :----------------- | :------: | :-----:  | :-----------
popupConfig   | `object`           | -        | -        | Configuration object for Popup with shape described below
buttonConfig  | `object`           | -        | -        | Configuration object for Button(component, on click of which popup is toggled) with shape described below
parentElm     | `Element`          | -        | -        | Element reference. This is parent container against which popup visibility boundry is maintained (Popup will be hidden going out of this parent container on scroll)

#### popupConfig properties
Name          | Type               | Required | Default  | Description       
:---------    | :----------------- | :------: | :-----:  | :-----------
Component     | `object`           | -        | -        | Any React component which will be displayed inside popup

#### buttonConfig properties
Name          | Type               | Required | Default  | Description       
:---------    | :----------------- | :------: | :-----:  | :-----------
Component     | `object`           | -        | -        | Any React component which will behave as a trigger of popup