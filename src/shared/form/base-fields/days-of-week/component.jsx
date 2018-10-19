import React, { PureComponent } from 'react';
import { string, bool, node, number, func, oneOf, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { FieldWithLabel, FieldWithError } from '../index';
import { DayCell, DAYS_OF_WEEK } from '../shared';
import styles from './component.scss';
import { withRender } from '../../../shared/with-render';

class DaysOfWeek extends PureComponent {
    static propTypes = {
        id: string,
        name: string,
        label: string,
        format: oneOf(['short', 'long']),
        value: arrayOf(number),
        error: node,

        isRequired: bool,
        isDisabled: bool,

        className: string,
        labelClassName: string,
        cellClassName: string,

        onChange: func.isRequired
    };

    static defaultProps = {
        id: undefined,
        label: undefined,
        format: 'short',
        value: [],
        error: null,

        className: undefined,
        labelClassName: undefined,
        cellClassName: undefined,

        isRequired: false,
        isDisabled: false,

        onChange: undefined
    };

    handleChange = day => {
        const daysOfWeek = new Set(this.props.value);

        if (daysOfWeek.has(day)) {
            daysOfWeek.delete(day);
        } else {
            daysOfWeek.add(day);
        }

        this.props.onChange(this.props.name, [...daysOfWeek]);
    };

    render() {
        return (
            <div className={classNames(styles.root, this.props.className)}>
                <FieldWithError error={this.props.error}>
                    <FieldWithLabel
                        id={this.props.id}
                        label={this.props.label}
                        required={this.props.isRequired}
                        className={this.props.labelClassName}
                    >
                        <div className={styles.daysList}>
                            {DAYS_OF_WEEK.map(day => (
                                <DayCell
                                    key={uuid()}
                                    isDisabled={this.props.isDisabled}
                                    className={classNames(
                                    styles.dayCell,
                                        {
                                            [styles.selected]: this.props.value.includes(day.number),
                                            [styles.error]: this.props.error
                                        },
                                        this.props.cellClassName
                                )}
                                    value={day.number}
                                    label={this.props.format === 'short' ? day.shortName : day.name}
                                    onChange={this.handleChange}
                                />
                        ))}
                        </div>
                    </FieldWithLabel>
                </FieldWithError>
            </div>
        );
    }
}

export default withRender()(DaysOfWeek);
