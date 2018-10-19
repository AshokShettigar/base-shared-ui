import React from 'react';
import { string, bool, node } from 'prop-types';
import classNames from 'classnames';

import { withRender } from '../../../../../shared';
import styles from './component.scss';

const LabelField = props => (
    <label
        htmlFor={props.id}
        className={classNames(styles.root, props.className)}
    >
        <span className={styles.label}>{props.children}</span>
        {props.description &&
            <span className={classNames(styles.description, props.descriptionClassName)}>
                {props.description}
            </span>
        }
        {props.required && <span className={styles.asterisk}>*</span>}
    </label>
);

LabelField.propTypes = {
    id: string,
    children: node.isRequired,
    description: node,

    required: bool,

    className: string,
    descriptionClassName: string
};

LabelField.defaultProps = {
    id: undefined,
    description: undefined,

    required: false,

    className: undefined,
    descriptionClassName: undefined
};

export default withRender()(LabelField);
