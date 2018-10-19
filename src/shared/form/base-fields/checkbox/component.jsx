import { PureComponent } from 'react';
import { string, bool, func, node } from 'prop-types';
import classNames from 'classnames';

import { FieldWithError } from '../index';
import { withRender } from '../../../shared';
import styles from './component.scss';
import { Icon } from '../../../icon';

class Checkbox extends PureComponent {
    static propTypes = {
        id: string,
        name: string,
        value: string,
        children: node,
        error: string,

        autoFocus: bool,
        readOnly: bool,
        checked: bool,
        multiple: bool,
        disabled: bool,
        indeterminate: bool,

        className: string,
        labelClassName: string,

        innerRef: func,
        onChange: func
    };

    static defaultProps = {
        id: undefined,
        name: undefined,
        value: undefined,
        children: undefined,
        error: undefined,

        autoFocus: false,
        readOnly: false,
        checked: false,
        multiple: false,
        disabled: false,
        indeterminate: false,

        className: undefined,
        labelClassName: undefined,

        innerRef: undefined,
        onChange: undefined
    };

    onChange = () => {
        if (this.props.onChange) {
            this.props.onChange({
                name: this.props.name,
                value: this.props.value,
                checked: this.checkboxRef.checked
            });
        }
    };

    checkboxRef = null;

    setRef = el => {
        this.checkboxRef = el;

        if (this.props.innerRef) {
            this.props.innerRef(el);
        }
    };

    render() {
        const className = classNames(styles.root, this.props.className, {
            [styles.multiple]: this.props.multiple,
            [styles.disabled]: this.props.disabled,
            [styles.readOnly]: this.props.readOnly,
            [styles.indeterminate]: this.props.indeterminate,
            [styles.checked]: this.props.checked
        });

        return (
            <span className={className}>
                <FieldWithError error={this.props.error}>
                    <label htmlFor={this.props.id} className={styles.label}>
                        <input
                            hidden
                            type="checkbox"
                            autoFocus={this.props.autoFocus} // eslint-disable-line
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked}
                            disabled={this.props.disabled}
                            ref={this.setRef}
                            onChange={this.onChange}
                        />
                        <span className={styles.checkbox}>
                            {this.props.indeterminate && <i className={styles.indeterminateGlyph} />}
                            {this.props.checked && !this.props.indeterminate &&
                                <span className={styles.checkmarkGlyph}>
                                    <Icon glyph="checkmark" size="mini" className={styles.icon} />
                                </span>
                            }
                        </span>
                        {this.props.children &&
                            <span
                                tabIndex={-1}
                                role="radio"
                                aria-checked={this.props.checked}
                                className={classNames(styles.labelText, this.props.labelClassName)}
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

export default withRender()(Checkbox);
