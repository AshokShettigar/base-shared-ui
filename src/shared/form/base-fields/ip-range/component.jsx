import React, { Component } from 'react';
import { string, bool, node, func, objectOf } from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';

import { KEY_CODES, isKeyCodeNumber } from '../../../helpers';
import { FieldWithError, FieldWithLabel, IPField } from '../index';
import { withRender } from '../../../shared';
import styles from './component.scss';

export class IPv4RangeField extends Component {
    static propTypes = {
        label: string,
        name: objectOf(string),
        value: objectOf(string).isRequired,
        error: node,
        startIPRangeError: node,
        endIPRangeError: node,
        separator: node,

        autoFocus: bool,
        disabled: bool,
        readOnly: bool,
        required: bool,
        hidden: bool,
        autoWidth: bool,
        hideErrorMessages: bool,

        className: string,
        labelClassName: string,
        fieldWrapperClassName: string,
        ipFieldClassName: string,
        fieldClassName: string,
        contentClassName: string,
        errorClassName: string,

        onChange: func.isRequired,
        onBlur: func
    };

    static defaultProps = {
        name: {
            start: undefined,
            end: undefined
        },
        value: {
            start: undefined,
            end: undefined
        },
        error: undefined,
        separator: undefined,

        autoFocus: false,
        disabled: false,
        readOnly: false,
        required: false,
        hidden: false,
        autoWidth: false,
        hideErrorMessages: false,

        className: undefined,
        labelClassName: undefined,
        fieldWrapperClassName: undefined,
        fieldClassName: undefined,
        contentClassName: undefined
    };

    componentDidMount () {
        if (this.props.autoWidth) {
            this.resizeInput(this.startIPFieldRef);
            this.resizeInput(this.endIPFieldRef);
        }
    }

    setStartIPFieldInnerRef = ref => {
        this.startIPFieldRef = ref;
    };

    setEndIPFieldInnerRef = ref => {
        this.endIPFieldRef = ref;
    };

    getFieldsValues = () => ({
        start: this.startIPFieldRef.value,
        end: this.endIPFieldRef.value
    });

    startIPFieldRef = null;

    endIPFieldRef = null;

    tabKeys = [KEY_CODES.ARROW_RIGHT, KEY_CODES.SPACE, KEY_CODES.DASH, KEY_CODES.TAB];

    backKeys = [KEY_CODES.ARROW_LEFT, KEY_CODES.BACKSPACE];

    isTabKeyPressed = keyCode => this.tabKeys.includes(keyCode);

    isBackKeyPressed = keyCode => this.backKeys.includes(keyCode);

    hasThreeDots = value => value.split('.').length - 1 === 3;

    isAllowedFocusEndField = (e, isValid) => {
        const { keyCode, target: { value, selectionStart: caretPosition } } = e;
        const isEndCaretPosition = caretPosition === value.length;

        return !isValid
            && e.target === this.startIPFieldRef
            && isEndCaretPosition
            && this.hasThreeDots(value)
            && (this.isTabKeyPressed(keyCode) || isKeyCodeNumber(keyCode));
    };

    isAllowedFocusStartField = e => {
        const { keyCode, target: { selectionStart, selectionEnd } } = e;
        const isStartCaretPosition = selectionStart === selectionEnd && selectionStart === 0;

        return e.target === this.endIPFieldRef
            && isStartCaretPosition
            && this.isBackKeyPressed(keyCode);
    };

    isAllowedSetEndFieldValue = ({ keyCode }) => isKeyCodeNumber(keyCode) && isEmpty(this.endIPFieldRef.value);

    resizeInput = ({ value, style }) => {
        const symbolsAmount = value.length;

        style.width = symbolsAmount ? `${(symbolsAmount * 7) + 20}px` : '120px';
    };

    handleKeyDown = (e, isValid) => {
        if (this.isAllowedFocusEndField(e, isValid)) {
            this.endIPFieldRef.focus();

            if (this.isAllowedSetEndFieldValue(e)) {
                this.endIPFieldRef.value = e.key;
            }

            e.preventDefault();
        }

        if (this.isAllowedFocusStartField(e)) {
            this.startIPFieldRef.focus();
            e.preventDefault();
        }
    };

    handleChange = ({ target }) => {
        if (this.props.autoWidth) {
            this.resizeInput(target);
        }

        this.props.onChange(this.getFieldsValues());
    };

    handleBlur = () => {
        if (this.props.onBlur) {
            this.props.onBlur(this.getFieldsValues());
        }
    };

    render() {
        return (
            <FieldWithError
                className={classNames(styles.root, this.props.errorClassName)}
                hideErrorMessages={this.props.hideErrorMessages}
                error={this.props.error}
            >
                <FieldWithLabel
                    label={this.props.label}
                    required={this.props.required}
                    className={this.props.labelClassName}
                >
                    <div className={classNames(styles.fields, this.props.className)}>
                        <IPField
                            name={this.props.name.start}
                            value={this.props.value.start}
                            error={this.props.startIPRangeError}

                            autoFocus={this.props.autoFocus}
                            disabled={this.props.disabled}
                            readOnly={this.props.readOnly}
                            required={this.props.required}

                            className={this.props.fieldWrapperClassName}
                            fieldClassName={classNames(this.props.fieldClassName, {
                                [styles.autoWidth]: !isEmpty(this.props.value.start) && this.props.autoWidth
                            })}

                            innerRef={this.setStartIPFieldInnerRef}
                            onBlur={this.handleBlur}
                            onKeyDown={this.handleKeyDown}
                            onKeyUp={this.handleKeyUp}
                            onChange={this.handleChange}
                        />
                        {
                            this.props.separator
                                ? this.props.separator
                                : <span className={styles.separator}>-</span>
                        }
                        <IPField
                            name={this.props.name.end}
                            value={this.props.value.end}
                            error={this.props.endIPRangeError}

                            autoFocus={false}
                            disabled={this.props.disabled}
                            readOnly={this.props.readOnly}
                            required={this.props.required}

                            className={this.props.fieldWrapperClassName}
                            fieldClassName={classNames(this.props.fieldClassName, {
                                [styles.autoWidth]: !isEmpty(this.props.value.end) && this.props.autoWidth
                            })}

                            innerRef={this.setEndIPFieldInnerRef}
                            onBlur={this.handleBlur}
                            onKeyDown={this.handleKeyDown}
                            onKeyUp={this.handleKeyUp}
                            onChange={this.handleChange}
                        />
                    </div>
                </FieldWithLabel>
            </FieldWithError>
        );
    }
}

export default withRender()(IPv4RangeField);
