import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'platform-common-ui';

import styles from './component.scss';

const ModalTitleElement = props => (
    <div className={classNames(styles.root, props.className)}>
        <div className={classNames(styles.title, props.titleClassName)}>{props.children}</div>
        <Icon className={classNames(styles.icon, props.iconClassName)} icon="close" onClick={props.onDismiss} />
    </div>
);


ModalTitleElement.propTypes = {
    titleClassName: string,
    iconClassName: string,
    className: string,
    children: string,
    onDismiss: func.isRequired
};

ModalTitleElement.defaultProps = {
    titleClassName: undefined,
    iconClassName: undefined
};

export default ModalTitleElement;
