import React from 'react';
import { string, bool, node } from 'prop-types';
import classNames from 'classnames';

import { FieldWithLabel, FieldWithError } from '../index';
import styles from './component.scss';

const FieldsGroup = props => (props.hidden ? null : (
    <div className={classNames(styles.root, props.className)}>
        <FieldWithError error={props.error}>
            <FieldWithLabel label={props.title} required={props.required} description={props.description}>
                <div className={classNames(styles.content, { [styles.inline]: props.inline }, props.contentClassName)}>
                    {props.children}
                </div>
            </FieldWithLabel>
        </FieldWithError>
    </div>
));

FieldsGroup.propTypes = {
    title: node,
    description: node,
    error: string,
    required: bool,
    inline: bool,
    hidden: bool,

    className: string,
    contentClassName: string,

    children: node.isRequired
};

FieldsGroup.defaultProps = {
    title: undefined,
    description: undefined,
    error: undefined,

    required: false,
    inline: false,
    hidden: false,

    className: undefined,
    contentClassName: undefined
};

export default FieldsGroup;
