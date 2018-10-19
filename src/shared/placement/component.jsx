import React, { PureComponent, isValidElement } from 'react';
import { string, bool, func, oneOf, oneOfType, shape, any, instanceOf } from 'prop-types';
import { Portal } from 'react-portal';
import classNames from 'classnames';

import { withRender } from '../shared';
import { PlacementDropDown } from './drop-down';

import styles from './component.scss';

class Placement extends PureComponent {
    static propTypes = {
        target: oneOfType([any]),
        context: instanceOf(HTMLElement),
        modifiers: shape(any),
        position: oneOf([
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start'
        ]),

        className: string,
        targetClassName: string,
        contentClassName: string,

        isPortal: bool,
        hidden: bool.isRequired,
        isOpen: bool.isRequired,

        children: func.isRequired,
        onDismiss: func.isRequired
    };

    static defaultProps = {
        isPortal: false,
        target: null,
        context: null,
        modifiers: undefined,
        position: 'bottom-start',

        className: undefined,
        targetClassName: undefined,
        contentClassName: undefined
    };

    setTargetRef = el => {
        this.targetRef = el;
    };

    render() {
        const isReactNode = isValidElement(this.props.target);
        const props = {
            rendered: this.props.isOpen,
            hidden: this.props.hidden,
            modifiers: this.props.modifiers,
            position: this.props.position,
            contentClassName: this.props.contentClassName,
            children: this.props.children,
            targetRef: isReactNode ? this.targetRef : this.props.target,
            context: this.props.context,
            onDismiss: this.props.onDismiss
        };

        return (
            <div className={classNames(styles.root, this.props.className)}>
                {isReactNode &&
                    <div className={classNames(styles.target, this.props.targetClassName)} ref={this.setTargetRef}>
                        {this.props.target}
                    </div>
                }
                {this.props.isPortal && this.props.isOpen
                    ? <Portal><PlacementDropDown {...props} /></Portal>
                    : <PlacementDropDown {...props} />
                }
            </div>

        );
    }
}

export default withRender()(Placement);
