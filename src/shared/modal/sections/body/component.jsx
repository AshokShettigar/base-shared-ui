import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';

import { ModalSideBarSection } from '../side-bar';
import styles from './component.scss';

const ModalBodySection = props => (
    <div className={classNames(styles.root, props.className)}>
        <div className={classNames(styles.content, props.contentClassName)}>
            {props.children}
        </div>
        {props.sidebar && <ModalSideBarSection>{props.sidebar}</ModalSideBarSection>}
    </div>
);


ModalBodySection.propTypes = {
    sidebar: node,
    children: node.isRequired,
    className: string,
    contentClassName: string
};

ModalBodySection.defaultProps = {
    sidebar: null,
    className: undefined
};

export default ModalBodySection;
