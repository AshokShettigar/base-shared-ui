import classNames from 'classnames';
import PropTypes from 'prop-types';

export function getFieldClassName(className, hasError, isDisabled, isRequired) {
    return classNames({
        'cn-field': true,
        'cn-field--disabled': isDisabled,
        'cn-field--invalid': hasError,
        'cn-field--required': isRequired
    }, className);
}

export function getFieldLabelClassName(className, hideLabel) {
    return classNames({
        a11y: hideLabel,
        'cn-field__label': true
    }, className);
}

export const Field = props => {
    const className = getFieldClassName(
        props.className,
        props.hasError,
        props.isDisabled,
        props.isRequired
    );
    return (
        <div className={className}>
            {
                props.label &&
                <span className={getFieldLabelClassName(props.labelClassName, props.hideLabel)}>
                    {props.label}
                </span>
            }
            {props.children}
        </div>
    );
};

Field.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string,
    labelClassName: PropTypes.string
};

Field.defaultProps = {
    hasError: false,
    isDisabled: false,
    isRequired: false
};
