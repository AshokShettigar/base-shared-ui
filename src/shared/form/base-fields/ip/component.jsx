import React, { PureComponent } from 'react';
import { string, bool, node, func } from 'prop-types';
import { isEmpty, last, includes } from 'lodash';
import classNames from 'classnames';

import { KEY_CODES, isKeyCodeNumber, getClipboardData } from '../../../helpers';
import { getIPRegExpByDotsCount } from '../../validate';
import styles from './component.scss';
import { TextField } from '../index';

class IPv4Field extends PureComponent {
    static propTypes = {
        label: node,
        name: string,
        value: string,
        children: node,
        error: node,

        autoFocus: bool,
        disabled: bool,
        readOnly: bool,
        required: bool,
        hidden: bool,
        hideErrorMessages: bool,

        className: string,
        labelClassName: string,
        fieldWrapperClassName: string,
        fieldClassName: string,
        contentClassName: string,

        onBlur: func,
        innerRef: func,
        onKeyDown: func,
        onKeyUp: func,
        onChange: func.isRequired
    };

    static defaultProps = {
        label: undefined,
        name: undefined,
        value: undefined,
        children: undefined,
        error: undefined,

        autoFocus: false,
        disabled: false,
        readOnly: false,
        required: false,
        hidden: false,
        hideErrorMessages: false,

        className: undefined,
        labelClassName: undefined,
        fieldWrapperClassName: undefined,
        fieldClassName: undefined,
        contentClassName: undefined,

        onBlur: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        innerRef: undefined
    };

    static allowedNavigationKeys = new Set([
        KEY_CODES.ARROW_LEFT,
        KEY_CODES.ARROW_RIGHT,

        KEY_CODES.END,
        KEY_CODES.HOME,

        KEY_CODES.TAB
    ]);

    componentDidMount() {
        if (this.props.innerRef) this.props.innerRef(this.fieldRef);
    }

    setFieldRef = el => {
        this.fieldRef = el;
    };

    getCaretPosition = ({ target }) => ({
        selectionStart: target.selectionStart,
        selectionEnd: target.selectionEnd,
        selectionLength: target.selectionEnd - target.selectionStart
    });

    getDotsCount = value => value.split('.').length - 1;

    getReplacedSelectionText = (e, substitute = e.key) => {
        const value = e.target.value;
        const { selectionStart, selectionEnd } = this.getCaretPosition(e);

        return value.substring(0, selectionStart) + substitute + value.substring(selectionEnd);
    };

    isSelectionPressed = ({ keyCode, ctrlKey: isCtrlPressed, metaKey: isMetaKeyPressed }) =>
        (isCtrlPressed || isMetaKeyPressed) && keyCode === KEY_CODES.A;

    isCopyOrPastePressed = ({ keyCode, ctrlKey: isCtrlPressed, metaKey: isMetaKeyPressed }) =>
        (isCtrlPressed || isMetaKeyPressed) && includes([KEY_CODES.C, KEY_CODES.V], keyCode);

    isNumberPressed = ({ keyCode, shiftKey: isShiftPressed }) => !isShiftPressed && isKeyCodeNumber(keyCode);

    isAllowedAction = e =>
        this.isSelectionPressed(e) || this.isCopyOrPastePressed(e) || IPv4Field.allowedNavigationKeys.has(e.keyCode);

    isAllowedDot = e => {
        const value = e.target.value;
        const dotsCount = this.getDotsCount(value);

        return value && last(value) !== '.' && dotsCount < 3;
    };

    isDotPressed = e => e.key === '.';

    isAllowedDelete = e => {
        const { selectionStart, selectionEnd, selectionLength } = this.getCaretPosition(e);
        const value = e.target.value;
        let featureValue = '';

        const isPressedDelete = KEY_CODES.DELETE === e.keyCode;
        const isPressedBackspace = KEY_CODES.BACKSPACE === e.keyCode;
        const isSelectedRange = selectionLength;

        if (isPressedDelete) { featureValue = value.substr(0, selectionStart) + value.substr(selectionEnd + 1); }
        if (isPressedBackspace) { featureValue = value.substr(0, selectionStart - 1) + value.substr(selectionEnd); }
        if (isSelectedRange) { featureValue = value.substr(0, selectionStart) + value.substr(selectionEnd); }

        return (isPressedDelete || isPressedBackspace) && (isEmpty(featureValue) || this.isIPValid(featureValue));
    };

    isIPValid = value => {
        const parsedFutureValue = value.replace(/\.$/, '');  // covered the edit case for "198."
        const dotsCount = this.getDotsCount(parsedFutureValue);
        const IPRegExp = getIPRegExpByDotsCount(dotsCount);

        return new RegExp(`^${IPRegExp}$`).test(dotsCount < 3 ? parsedFutureValue : value);
    };

    handlePaste = e => {
        const clipboardData = getClipboardData(e);
        const futureValue = this.getReplacedSelectionText(e, clipboardData);

        if (this.isIPValid(futureValue)) {
            return;
        }

        e.preventDefault();
    };

    handleKeyDown = e => {
        const value = this.getReplacedSelectionText(e);

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e, this.isIPValid(this.getReplacedSelectionText(e)));
        }

        // `return` it's expression allows skipping a symbol
        if (this.isAllowedAction(e) || this.isAllowedDelete(e) || this.isIPValid(value)) {
            return; // eslint-disable-line
        }

        if (this.isNumberPressed(e) && this.isAllowedDot(e) && !this.isDotPressed(e)) {
            this.fieldRef.value += '.';

            // we allow putting a symbol after adding a dot
            // this allowed converted IP from 1988 to 198.8
            return;
        }

        e.preventDefault();
    };

    handleKeyUp = e => {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e, this.isIPValid(this.getReplacedSelectionText(e)));
        }
    };

    render() {
        return this.props.hidden ? null : (
            <TextField
                name={this.props.name}
                value={this.props.value}
                label={this.props.label}
                placeholder="000.000.000.000"

                autoFocus={this.props.autoFocus}
                disabled={this.props.disabled}
                readOnly={this.props.readOnly}
                required={this.props.required}
                hidden={this.props.hidden}
                error={this.props.error}
                hideErrorMessages={this.props.hideErrorMessages}

                className={this.props.className}
                labelClassName={this.props.labelClassName}
                fieldWrapperClassName={this.props.fieldWrapperClassName}
                fieldClassName={classNames(styles.field, this.props.fieldClassName)}

                refField={this.setFieldRef}

                onKeyDown={this.handleKeyDown}
                onKeyUp={this.handleKeyUp}
                onPaste={this.handlePaste}
                onBlur={this.props.onBlur}
                onChange={this.props.onChange}
            >
                {this.props.children}
            </TextField>
        );
    }
}

export default IPv4Field;
