import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Spinner } from 'platform-common-ui';

export const BUTTON_VARIATION = {
    DEFAULT: 0,
    PRIMARY: 1,
    SECONDARY: 2
};

export const BUTTON_SIZE = {
    SMALL: 0,
    MEDIUM: 1,
    LARGE: 2
};

const Button = props => {
    const className = classNames({
        'cn-btn': true,
        'cn-btn--dark': props.isDark,
        'cn-btn--disabled': props.isDisabled || props.isLoading,
        'cn-btn--large': props.size === BUTTON_SIZE.LARGE,
        'cn-btn--medium': props.size === BUTTON_SIZE.MEDIUM,
        'cn-btn--primary': props.variation === BUTTON_VARIATION.PRIMARY,
        'cn-btn--secondary': props.variation === BUTTON_VARIATION.SECONDARY,
        'cn-btn--small': props.size === BUTTON_SIZE.SMALL
    }, props.className);

    const spinnerProps = {
        size: 'extra-small',
        className: 'cn-modal-controls__button-spinner'
    };

    return (
        <button
            form={props.form}
            className={className}
            disabled={props.isDisabled || Boolean(props.isLoading)}
            onClick={props.onClick}
            type={props.type}
            ref={props.setRef}
        >
            {props.isLoading && <Spinner {...spinnerProps} />}
            {props.children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    form: PropTypes.string,
    className: PropTypes.string,
    isDark: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    variation: PropTypes.number.isRequired,
    setRef: PropTypes.func
};

Button.defaultProps = {
    form: undefined,
    isDark: false,
    isDisabled: false,
    size: BUTTON_SIZE.MEDIUM,
    type: 'button',
    variation: BUTTON_VARIATION.DEFAULT,
    isLoading: undefined,
    setRef: undefined
};

export default Button;
