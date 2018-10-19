import React, { PureComponent } from 'react';
import { string, bool, func, node } from 'prop-types';
import classNames from 'classnames';
import uuid4 from 'uuid';

import { FieldWithError } from '../index';
import styles from './component.scss';
import { withRender } from '../../../shared';

class Radio extends PureComponent {
    static propTypes = {
        id: string,
        name: string,
        value: string,

        className: string,
        labelClassName: string,
        containerClassName: string,

        checked: bool,
        disabled: bool,
        hidden: bool,

        children: node.isRequired,
        error: string,

        innerContainerRef: func,
        onChange: func
    };

    static defaultProps = {
        id: undefined,
        name: undefined,
        value: undefined,

        className: undefined,
        containerClassName: undefined,

        checked: false,
        disabled: false,
        hidden: false,

        error: undefined,

        innerContainerRef: undefined,
        onChange: undefined
    };

    onChange = e => {
        e.preventDefault();

        if (this.props.onChange && !this.props.disabled) {
            this.props.onChange(this.props.name, this.props.value);
        }
    };

    render () {
        const className = classNames(styles.root, this.props.className, {
            [styles.disabled]: this.props.disabled,
            [styles.checked]: this.props.checked
        });
        const id = this.props.id || uuid4();

        return (
            <span className={className} ref={this.props.innerContainerRef}>
                <FieldWithError error={this.props.error}>
                    <label htmlFor={id} className={classNames(styles.label, this.props.labelClassName)}>
                        <input
                            hidden
                            id={id}
                            type="radio"
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked}
                            disabled={this.props.disabled}
                            onChange={this.onChange}
                        />
                        <span
                            role="presentation"
                            className={styles.radio}
                            onClick={this.onChange}
                        />
                        {this.props.children &&
                            <span
                                tabIndex={-1}
                                role="radio"
                                aria-checked={this.props.checked}
                                className={classNames(styles.container, this.props.containerClassName)}
                                onClick={this.onChange}
                            >
                                {this.props.children}
                            </span>
                        }
                    </label>
                </FieldWithError>
            </span>
        );
    }
}

export default withRender()(Radio);
