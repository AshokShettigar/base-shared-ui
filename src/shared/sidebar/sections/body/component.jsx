import React from 'react';
import { string, node, func } from 'prop-types';
import classNames from 'classnames';

import styles from './component.scss';

const SidebarBodySection = props => (
    <div className={classNames(styles.root, props.className)} ref={props.sidebarBodyRef}>
        {props.children}
    </div>
);

SidebarBodySection.propTypes = {
    children: node.isRequired,
    className: string,
    sidebarBodyRef: func
};

export default SidebarBodySection;
