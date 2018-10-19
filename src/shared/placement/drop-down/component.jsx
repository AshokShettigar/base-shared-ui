import { string, bool, func, shape, any, instanceOf } from 'prop-types';
import { Popper } from 'react-popper';
import classNames from 'classnames';

import { withRender } from '../../shared';
import { Dismissible } from '../../dismissible';

import styles from './component.scss';

const PlacementDropDown = props => (
    <Popper
        positionFixed
        referenceElement={props.targetRef}
        placement={props.position}
        modifiers={props.modifiers}
    >
        {({ ref, style, scheduleUpdate, placement }) => (
            <div ref={ref} style={style} className={styles.root} hidden={props.hidden}>
                <Dismissible onDismiss={props.onDismiss} target={props.targetRef} context={props.context}>
                    <div className={classNames(styles.content, props.contentClassName)}>
                        {props.children({ updatePosition: scheduleUpdate, position: placement || props.position })}
                    </div>
                </Dismissible>
            </div>
        )}
    </Popper>
);

PlacementDropDown.propTypes = {
    modifiers: shape(any),
    position: string.isRequired,
    hidden: bool,
    targetRef: instanceOf(HTMLElement),
    context: instanceOf(HTMLElement),

    className: string,
    contentClassName: string,

    children: func.isRequired,
    onDismiss: func.isRequired
};

PlacementDropDown.defaultProps = {
    modifiers: undefined,
    className: undefined,

    hidden: false,
    targetRef: null,
    context: null,

    contentClassName: undefined
};

export default withRender()(PlacementDropDown);
