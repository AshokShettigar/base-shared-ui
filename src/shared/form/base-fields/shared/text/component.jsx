import React, { PureComponent } from 'react';
import { string, number, bool, func, node } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { FieldWithLabel, FieldWithError, FieldWithIcon } from '../../index';
import styles from './component.scss';

class TextField extends PureComponent {
    static propTypes = {
        id: string,
        name: string,
        value: string,
        label: node,
        placeholder: string,
        children: node,
        icon: string,

        hideErrorMessages: bool,
        autoFocus: bool,
        disabled: bool,
        readOnly: bool,
        required: bool,
        hidden: bool,
        error: node,

        maxLength: number,

        className: string,
        labelClassName: string,
        fieldWrapperClassName: string,
        fieldClassName: string,
        contentClassName: string,
        iconClassName: string,

        refField: func,
        onKeyDown: func,
        onKeyUp: func,
        onPaste: func,
        onBlur: func,
        onClick: func,
        onChange: func
    };

    static defaultProps = {
        id: undefined,
        name: undefined,
        value: undefined,
        label: undefined,
        placeholder: undefined,
        children: undefined,
        icon: '',

        hideErrorMessages: false,
        autoFocus: false,
        disabled: false,
        readOnly: false,
        required: false,
        hidden: false,
        error: undefined,

        maxLength: undefined,

        className: undefined,
        labelClassName: undefined,
        fieldWrapperClassName: undefined,
        fieldClassName: undefined,
        contentClassName: undefined,
        iconClassName: undefined,

        refField: undefined,
        onKeyDown: undefined,
        onPaste: undefined,
        onBlur: undefined,
        onClick: undefined,
        onChange: undefined
    };

    render() {
        const id = this.props.id || uuid();

        return this.props.hidden ? null : (
            <div className={classNames(styles.root, this.props.className)}>
                <FieldWithError error={this.props.error} hideErrorMessages={this.props.hideErrorMessages}>
                    <FieldWithLabel
                        id={id}
                        label={this.props.label}
                        required={this.props.required}
                        className={this.props.labelClassName}
                    >
                        <div className={classNames(styles['field-wrapper'], this.props.fieldWrapperClassName)}>
                            <FieldWithIcon icon={this.props.icon}>
                                <input
                                    id={id}
                                    ref={this.props.refField}
                                    type="text"
                                    name={this.props.name}
                                    value={this.props.value}
                                    placeholder={this.props.placeholder}
                                    // eslint-disable-next-line
                                    autoFocus={this.props.autoFocus}
                                    disabled={this.props.disabled}
                                    readOnly={this.props.readOnly}

                                    maxLength={this.props.maxLength}

                                    className={classNames(styles.field, this.props.fieldClassName)}

                                    onKeyDown={this.props.onKeyDown}
                                    onKeyUp={this.props.onKeyUp}
                                    onPaste={this.props.onPaste}
                                    onBlur={this.props.onBlur}
                                    onClick={this.props.onClick}
                                    onChange={this.props.onChange}
                                />
                                {this.props.children &&
                                <span className={classNames(styles.content, this.props.contentClassName)}>
                                        {this.props.children}
                                    </span>
                                }
                            </FieldWithIcon>
                        </div>
                    </FieldWithLabel>
                </FieldWithError>
            </div>
        );
    }
}

export default TextField;
