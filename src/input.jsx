import PropTypes from 'prop-types';
import { Component } from 'react';
import { getFieldClassName, getFieldLabelClassName } from 'platform-common-ui/field';
import isFunction from 'lodash/isFunction';

export const onChangeInput = callback => event => callback(event.target.value);
const onKeyDownInput = callback => event => {
    if (!isFunction(callback)) { return; }
    callback(event.keyCode, event);
};

const onBlurInput = callback => event => {
    if (!isFunction(callback)) { return; }
    callback(event);
};

export class Input extends Component {
    constructor(props) {
        super(props);
        this.setTextInputRef = component => { this.textInput = component; };
    }

    componentDidMount() {
        if (this.props.isFocusOnMount) {
            this.focus();
            this.select();
        }
    }

    blur() {
        this.textInput.blur();
    }

    focus() {
        this.textInput.focus();
    }

    select() {
        this.textInput.select();
    }

    render() {
        const className = getFieldClassName(
            this.props.className,
            this.props.hasError,
            this.props.isDisabled,
            this.props.isRequired
        );
        const labelClassName = getFieldLabelClassName(null, this.props.hideLabel);
        return (
            <label className={className} htmlFor={this.props.id}>
                <span className={labelClassName}>{this.props.label}</span>
                <input
                    className="cn-field__input"
                    disabled={this.props.isDisabled}
                    id={this.props.id}
                    maxLength={this.props.maxLength}
                    onBlur={onBlurInput(this.props.onBlur)}
                    onChange={onChangeInput(this.props.onChange)}
                    onKeyDown={onKeyDownInput(this.props.onKeyDown)}
                    placeholder={this.props.placeholder}
                    ref={this.setTextInputRef}
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                />
                {this.props.children}
            </label>
        );
    }
}

Input.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocusOnMount: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.number,
    max: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Input.defaultProps = {
    hasError: false,
    hideLabel: false,
    isDisabled: false,
    isFocusOnMount: false,
    isRequired: false,
    type: 'text'
};
