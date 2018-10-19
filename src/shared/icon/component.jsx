import React from 'react';
import { string, bool, oneOf, func } from 'prop-types';
import classNames from 'classnames';
import { values } from 'lodash';

import { withRender } from '../shared';
import { SIZES } from '../constants';
import styles from './component.scss';

const Icon = props => {
    const iconProps = {
        className: classNames(styles.root, props.className, {
            [styles[props.size]]: props.size
        }),
        onClick: props.disabled ? undefined : props.onClick,
        tabIndex: props.onClick && !props.disabled ? 0 : undefined,
        role: props.onClick && !props.disabled ? 'button' : undefined,
        ref: props.innerRef
    };

    const glyphClassName = classNames(styles.glyph, props.glyphClassName, {
        [styles.clickable]: props.onClick,
        [styles.controlled]: props.controlled,
        [styles.active]: props.active,
        [styles.disabled]: props.disabled,
        [styles[props.size]]: props.size
    });

    return (
        <i {...iconProps}>
            <svg className={glyphClassName}><use xlinkHref={`#${props.glyph}`} /></svg>
        </i>
    );
};

Icon.propTypes = {
    glyph: string.isRequired,
    size: oneOf(values(SIZES)),

    controlled: bool,
    active: bool,
    disabled: bool,

    className: string,
    glyphClassName: string,

    innerRef: func,
    onClick: func
};

Icon.defaultProps = {
    size: SIZES.MEDIUM,

    controlled: true,
    active: false,
    disabled: false,

    className: undefined,
    glyphClassName: undefined,

    innerRef: undefined,
    onClick: undefined
};

export default withRender()(Icon);
