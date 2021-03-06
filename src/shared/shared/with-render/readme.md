## withRender
### Usage
```JSX
// title/component.jsx
import { shared } from 'platform-common-ui';
const { withRender } = shared;
//
const Title = props => <div className="titleClassName">{props.children}</div>;
export default withRender()(Title);
```
```JSX
// title/index.js
export { default as Title } from './component';
```
```JSX
// usage
<TitleWithRender rendered={props.title}>{props.title}</TitleWithRender>
```


### Examples
```JSX
// Before
<div className="someClassName">
    {props.type && <Icon className={styles.icon} icon="someIcon" />}
    {
            !props.title ? null : props.onTitleClick 
                ? <span role="link" tabIndex="0" className={styles.titleLink} onClick={props.onTitleClick}>{ props.title }</span>
                : <span>{ props.title }</span>
        }
    {
        props.taskType &&
        !props.isOutputHidden &&
        !props.output &&
        <div className={styles.emptyOutput}>
            {
                props.intl.formatMessage(featuresI18n.runningOutput, {
                    type: taskTypeConverter(props.taskType)
                })
            }
        </div>
    }
</div>
```

```JSX
// After
<div className="someClassName">
    <Icon rendered={props.type} className={styles.icon} icon="someIcon" />
    <Title 
        rendered={props.title || props.title && props.onTitleClick } 
        onTitleClick={props.onTitleClick} 
    >
        props.title
    </Title>
    <Output rendered={props.isRenderOutput}>
        {props.output}
    </Output>
</div>
```

### Description
withRender HOC was implemented with one target to improve displaying of components and also improve the code readability.

### HOC Properties
Name                  | Type               | Required | Default     | Description
:---------------------| :----------:       | :------: | :-----:     | :-----------
className             | `string`           | `-`      | undefined   | add custom class to element which wrapped the component


### Properties
Name                  | Type               | Required | Default     | Description
:---------------------| :----------:       | :------: | :-----:     | :-----------
hidden                | `bool`             | `-`      | false       | Hide a wrapped component
rendered              | `bool`             | `-`      | true        | Don't render a wrapped component
children              | `node`             | `-`      | null        | Render content inside a wrapped component
