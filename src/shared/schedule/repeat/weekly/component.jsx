import { Component } from 'react';
import { string, func } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';

import { FieldsGroup, NumberField, DatePickerField, DaysOfWeek } from '../../../form';
import i18n from '../i18n';
import styles from './component.scss';

class Weekly extends Component {
    static propTypes = {
        name: string.isRequired,
        getField: func.isRequired,
        getFieldValue: func.isRequired,
        destroyForm: func.isRequired,
        onChange: func.isRequired,
        intl: intlShape
    };

    componentWillUnmount() {
        this.props.destroyForm(this.props.name);
    }

    render() {
        const field = this.props.getField(`${this.props.name}.every`);
        const daysOfWeeks = this.props.getField(`${this.props.name}.daysOfWeek`);

        return (
            <FieldsGroup inline className={styles.root} contentClassName={styles.content}>
                <NumberField
                    required
                    label={this.props.intl.formatMessage(i18n.every)}
                    className={styles.row}
                    fieldClassName={styles.every}
                    maxLength={2}
                    max={5}
                    name={field.name}
                    value={field.value}
                    error={field.error}
                    onChange={this.props.onChange}
                >
                    <span>{this.props.intl.formatMessage(i18n.weeks)}</span>
                </NumberField>
                <DaysOfWeek
                    isRequired
                    label={this.props.intl.formatMessage(i18n.daysOfWeek)}
                    className={classNames(styles.daysOfWeek, styles.row)}
                    name={daysOfWeeks.name}
                    value={daysOfWeeks.value}
                    error={daysOfWeeks.error}
                    onChange={this.props.onChange}
                />
                <DatePickerField
                    required
                    label="RUN TIME"
                    showTimeSelectOnly
                    showTimeSelect
                    className={styles.row}
                    field={this.props.getField(`${this.props.name}.runTime`)}
                    onChange={this.props.onChange}
                />
            </FieldsGroup>
        );
    }
}

export default injectIntl(Weekly);
