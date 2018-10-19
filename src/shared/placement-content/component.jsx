import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';

import styles from './component.scss';
import { getOffsetByPosition } from './helpers';

const PlacementContent = ({ position, children, offset, className }) => (
    <div className={classNames(styles.root, className)} style={getOffsetByPosition(position, offset)}>{children}</div>
);

PlacementContent.propTypes = {
    position: string.isRequired,
    children: node.isRequired,
    offset: string,
    className: string
};

PlacementContent.defaultProps = {
    offset: '8px',
    className: undefined
};

export default PlacementContent;
