import PropTypes from 'prop-types';
import { getFieldClassName, getFieldLabelClassName } from 'platform-common-ui/field';
import { onChangeInput } from 'platform-common-ui/input';

// eslint-disable-next-line import/prefer-default-export
export const Textarea = props => {
    const className = getFieldClassName(
        props.className,
        props.hasError,
        props.isDisabled,
        props.isRequired
    );
    const labelClassName = getFieldLabelClassName(null, props.hideLabel);
    const id = props.id || `${props.label}${props.value}`;

    return (
        <label className={className} htmlFor={id}>
            <span className={labelClassName}>{props.label}</span>
            <textarea
                className="cn-field__input"
                cols={props.cols}
                disabled={props.isDisabled}
                onChange={onChangeInput(props.onChange)}
                placeholder={props.placeholder}
                rows={props.rows}
                value={props.value}
                id={id}
            />
        </label>
    );
};

Textarea.propTypes = {
    className: PropTypes.string,
    cols: PropTypes.number,
    hasError: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string,
    id: PropTypes.string
};

Textarea.defaultProps = {
    hasError: false,
    hideLabel: false,
    isDisabled: false,
    isRequired: false
};
