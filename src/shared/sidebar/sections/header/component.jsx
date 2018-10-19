import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'platform-common-ui';

import styles from './component.scss';

const SidebarHeaderSection = props => (
    <div className={classNames(styles.root, props.className)}>
        <div className={classNames(styles.title, props.titleClassName)}>{props.children}</div>
        <div className={styles.icons}>
            {props.onNavigateToPrevious && <Icon
                className={classNames(styles.iconNavigatePrevious, props.iconClassName)}
                icon="caret-left"
                onClick={props.onNavigateToPrevious}
            />}
            {props.onNavigateToNext && <Icon
                className={classNames(styles.iconNavigateNext, props.iconClassName)}
                icon="caret-left"
                onClick={props.onNavigateToNext}
            />}
            <Icon
                className={classNames(styles.iconClose, props.iconClassName)}
                icon="close"
                onClick={props.onDismiss}
            />
        </div>
    </div>
);


SidebarHeaderSection.propTypes = {
    children: string,
    onDismiss: func.isRequired,
    onNavigateToNext: func,
    onNavigateToPrevious: func,
    titleClassName: string,
    iconClassName: string,
    className: string
};

SidebarHeaderSection.defaultProps = {
    titleClassName: undefined,
    iconClassName: undefined,
    onNavigateToNext: undefined,
    onNavigateToPrevious: undefined
};

export default SidebarHeaderSection;
