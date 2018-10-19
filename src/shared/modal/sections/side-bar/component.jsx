import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

import styles from './component.scss';

const ModalSideBarSection = props => (
    <div className={classNames(styles.root, props.className)}>
        {props.children}
    </div>
);

ModalSideBarSection.propTypes = {
    children: node.isRequired,
    className: string
};

ModalSideBarSection.defaultProps = {
    className: undefined
};

export default ModalSideBarSection;
