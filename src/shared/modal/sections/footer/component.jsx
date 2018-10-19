import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';

import styles from './component.scss';

const ModalFooterSection = props => (
    <div className={classNames(styles.root, props.className)}>
        {props.children}
    </div>
);


ModalFooterSection.propTypes = {
    children: node.isRequired,
    className: string
};

ModalFooterSection.defaultProps = {
    className: undefined
};

export default ModalFooterSection;
