import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'platform-common-ui';

import { withRender } from '../../../../shared';
import styles from './component.scss';

const WithIconField = props => (
    <div className={classNames(styles.root, props.className)}>
        {props.children}
        {props.icon &&
            <i className={classNames(styles.icon, props.iconClassName)}>
                <Icon icon={props.icon} />
            </i>
        }
    </div>
);

WithIconField.propTypes = {
    icon: string,
    children: node.isRequired,

    className: string,
    iconClassName: string
};

WithIconField.defaultProps = {
    icon: '',

    className: undefined,
    iconClassName: undefined
};

export default withRender()(WithIconField);
