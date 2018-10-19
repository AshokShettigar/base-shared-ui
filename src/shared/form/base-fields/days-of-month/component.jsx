import React, { PureComponent } from 'react';
import { string, bool, node, func, number, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { FieldWithLabel, FieldWithError } from '../index';
import { DayCell } from '../shared';
import { withRender } from '../../../shared';
import styles from './component.scss';

class DaysOfMonth extends PureComponent {
    static propTypes = {
        id: string,
        error: node,
        label: string,
        name: string,
        value: arrayOf(number),
        description: string,

        required: bool,
        isDisabled: bool,

        className: string,
        labelClassName: string,
        cellClassName: string,

        onChange: func.isRequired
    };

    static defaultProps = {
        id: undefined,
        error: null,
        label: undefined,
        name: undefined,
        value: [],
        description: undefined,

        required: false,
        isDisabled: false,

        className: undefined,
        labelClassName: undefined,
        cellClassName: undefined,

        onChange: undefined
    };

    handleChange = day => {
        const daysOfMonth = new Set(this.props.value);

        if (daysOfMonth.has(day)) {
            daysOfMonth.delete(day);
        } else {
            daysOfMonth.add(day);
        }

        this.props.onChange(this.props.name, [...daysOfMonth]);
    };

    render() {
        return (
            <div className={classNames(styles.root, this.props.className)}>
                <FieldWithError error={this.props.error}>
                    <FieldWithLabel
                        required={this.props.required}
                        id={this.props.id}
                        label={this.props.label}
                        className={this.props.labelClassName}
                    >
                        <div className={styles.dateCard}>
                            {[...Array(31).keys()].map(day => (
                                <DayCell
                                    key={uuid()}
                                    className={classNames(
                                        styles.dayCell,
                                        {
                                            [styles.selected]: this.props.value.includes(day + 1),
                                            [styles.error]: this.props.error
                                        },
                                        this.props.cellClassName
                                    )}
                                    value={day + 1}
                                    label={`${day + 1}`}
                                    isDisabled={this.props.isDisabled}
                                    onChange={this.handleChange}
                                />
                            ))}
                        </div>
                    </FieldWithLabel>
                </FieldWithError>
                {this.props.description && (
                    <div className={styles.description}>
                        {this.props.description}
                    </div>
                )}
            </div>
        );
    }
}

export default withRender()(DaysOfMonth);
