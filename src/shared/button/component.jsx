import { node, string, bool, func, oneOf } from 'prop-types';
import { values } from 'lodash';
import classNames from 'classnames';

import { Icon } from '../icon';
import { Spinner } from '../spinner';
import styles from './styles/component.scss';
import { KINDS, SIZES } from '../constants';
import { withRender } from '../shared';

const Button = props => {
    const className = classNames(styles.root, props.className, {
        [styles[props.kind]]: props.kind,
        [styles[props.size]]: props.size,
        [styles.disabled]: props.disabled,
        [styles.active]: props.active,
        [styles.loading]: props.loading
    });
    const renderedIcon = !props.loading && Boolean(props.icon);
    const buttonProps = {
        className,
        type: props.type,
        onClick: props.onClick,
        disabled: props.disabled || props.loading,
        ref: props.innerRef
    };

    return (
        <button {...buttonProps}>
            <Icon rendered={renderedIcon} glyph={props.icon} size={props.size} className={styles.icon} />
            <Spinner rendered={props.loading} size={props.size} className={styles.spinner} />
            {props.children && <span className={styles.content}>{props.children}</span>}
        </button>
    );
};

Button.propTypes = {
    children: node,
    icon: string,
    kind: oneOf(values(KINDS)),
    size: oneOf([
        SIZES.SMALL,
        SIZES.MEDIUM,
        SIZES.LARGE
    ]),
    type: oneOf(['button', 'submit']),

    loading: bool,
    disabled: bool,
    active: bool,

    className: string,

    innerRef: func,
    onClick: func.isRequired
};

Button.defaultProps = {
    children: undefined,
    icon: undefined,
    kind: KINDS.PRIMARY,
    size: SIZES.SMALL,
    type: 'submit',

    loading: false,
    disabled: false,
    active: false,

    className: undefined,

    innerRef: undefined
};

export default withRender()(Button);
