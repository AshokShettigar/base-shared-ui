import React from 'react';
import { string, bool, node, func } from 'prop-types';
import classnames from 'classnames';

import { Icon } from '../../shared';
import styles from './component.scss';

const StaticSidebar = props => (
    <div className={classnames(
        props.isExpand ? styles.expanded : styles.collapsed,
        props.classNames
    )}
    >
        <div className={classnames(styles.header, props.headerClassNames)}>
            {
                (!props.isExpand || props.onBack) &&
                <Icon
                    className={classnames(styles.backIcon, props.backIconClassNames)}
                    glyph="caret-left"
                    size="large"
                    onClick={props.isExpand ? props.onBack : props.onExpand}
                />
            }
            <span className={classnames(styles.title, props.titleClassNames)} hidden={!props.isExpand}>
                {props.title}
            </span>
            {
                props.isExpand &&
                <Icon
                    className={classnames(styles.close, props.closeIconClassNames)}
                    glyph="close"
                    size="large"
                    onClick={props.onCollapse}
                />
            }
        </div>
        {
            <div
                className={classnames(
                    { [styles.contentCollapsed]: !props.isExpand },
                    styles.content,
                    props.contentClassNames
                )}
            >
                {props.isExpand && props.children}
            </div>
        }
    </div>
);

StaticSidebar.propTypes = {
    isExpand: bool,
    isBackIconShown: bool,

    classNames: string,
    backIconClassNames: string,
    headerClassNames: string,
    titleClassNames: string,
    closeIconClassNames: string,
    contentClassNames: string,

    onBack: func,
    onCollapse: func,
    onExpand: func,

    title: node,
    children: node
};

StaticSidebar.defaultProps = {
    isExpand: false,
    isBackIconShown: false,

    classNames: undefined,
    backIconClassNames: undefined,
    headerClassNames: undefined,
    titleClassNames: undefined,
    closeIconClassNames: undefined,
    contentClassNames: undefined,

    onBack: undefined,
    onCollapse: undefined,
    onExpand: undefined,

    title: undefined,
    children: undefined
};

export default StaticSidebar;
