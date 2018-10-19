import PropTypes from 'prop-types';
import { getFieldClassName, getFieldLabelClassName } from 'platform-common-ui/field';
import { onChangeInput } from 'platform-common-ui/input';

function renderEmptyOption(emptyOptionLabel, isRequired) {
    return <option disabled={isRequired}>{emptyOptionLabel}</option>;
}

function renderOptions(options) {
    return options.map(option => (
        <option
            disabled={!!option.isDisabled}
            key={option.value}
            value={option.value}
        >
            {option.label}
        </option>
    ));
}

// eslint-disable-next-line import/prefer-default-export
export const Select = props => {
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
            <div className="cn-field__select">
                <select
                    defaultValue={props.defaultValue}
                    disabled={props.isDisabled}
                    onChange={onChangeInput(props.onChange)}
                    value={props.value}
                    id={id}
                >
                    {props.showEmptyOption
                        && renderEmptyOption(props.emptyOptionLabel, props.isRequired)}
                    {renderOptions(props.options)}
                </select>
            </div>
        </label>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    emptyOptionLabel: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        isDisabled: PropTypes.bool,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    showEmptyOption: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    id: PropTypes.string
};

Select.defaultProps = {
    hasError: false,
    hideLabel: false,
    isDisabled: false,
    isRequired: false,
    showEmptyOption: false
};
