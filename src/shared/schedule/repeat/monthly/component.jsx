import { Component } from 'react';
import { string, func } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import { FieldsGroup, NumberField, DatePickerField, DaysOfMonth } from '../../../form';
import i18n from '../i18n';
import styles from './component.scss';

class Monthly extends Component {
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
        const everyField = this.props.getField(`${this.props.name}.every`);
        const daysOfMonth = this.props.getField(`${this.props.name}.daysOfMonth`);

        return (
            <FieldsGroup className={styles.root}>
                <div className={styles.row}>
                    <NumberField
                        required
                        label={this.props.intl.formatMessage(i18n.every)}
                        fieldClassName={styles.every}
                        maxLength={2}
                        max={12}
                        name={everyField.name}
                        value={everyField.value}
                        error={everyField.error}
                        onChange={this.props.onChange}
                    >
                        <span>{this.props.intl.formatMessage(i18n.months)}</span>
                    </NumberField>
                </div>
                <DaysOfMonth
                    required
                    label={this.props.intl.formatMessage(i18n.daysOfMonth)}
                    description={this.props.intl.formatMessage(i18n.daysOfMonthDescription)}
                    className={styles.row}
                    name={daysOfMonth.name}
                    value={daysOfMonth.value}
                    error={daysOfMonth.error}
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

export default injectIntl(Monthly);
