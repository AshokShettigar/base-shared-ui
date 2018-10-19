import { PureComponent } from 'react';
import { string, bool, shape, func, node } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import moment from 'moment';
import { isEqual, omit } from 'lodash';
import classNames from 'classnames';
import { DatePickerField, FieldWithError, FieldWithLabel } from '../../index';
import i18n from './i18n';
import styles from './component.scss';

class TimeRange extends PureComponent {
    state = {
        startTime: this.props.value.startTime,
        endTime: this.props.value.endTime,
        updatedField: null
    };

    componentDidUpdate(prevProps, prevState) {
        if (!isEqual(this.state, prevState)) {
            this.props.onChange(this.state.updatedField, omit(this.state, 'updatedField'));
        }
    }

    getField = name => ({
        name,
        value: this.state[name] ? moment(this.state[name]) : null
    });

    handleChange = (name, value) => {
        this.setState({
            [name]: moment(value).format(this.props.outputFormat),
            updatedField: name
        });
    };

    render() {
        const startTimeField = this.getField('startTime');
        const endTimeField = this.getField('endTime');

        return (
            <div className={this.props.className}>
                <FieldWithError
                    error={this.props.error}
                    hideErrorMessages={this.props.hideErrorMessages}
                >
                    <FieldWithLabel
                        label={this.props.label}
                        required={this.props.isRequired}
                        className={this.props.labelClassName}
                    >
                        <div>
                            <DatePickerField
                                id="startTime"
                                required={this.props.isRequired}
                                showTimeSelectOnly
                                showTimeSelect
                                className={classNames(
                                    styles.timepicker, this.props.timepickerClassName
                                )}
                                field={startTimeField}
                                onChange={this.handleChange}
                            />
                            {this.props.intl.formatMessage(i18n.to)}
                            <DatePickerField
                                id="endTime"
                                required={this.props.isRequired}
                                showTimeSelectOnly
                                showTimeSelect
                                className={classNames(
                                    styles.timepicker, this.props.timepickerClassName
                                )}
                                field={endTimeField}
                                onChange={this.handleChange}
                            />
                            {this.props.description &&
                                <span
                                    className={classNames(
                                        styles.description, this.props.descriptionClassName
                                    )}
                                >
                                    {this.props.description}
                                </span>
                            }
                        </div>
                    </FieldWithLabel>
                </FieldWithError>
            </div>
        );
    }
}

TimeRange.propTypes = {
    value: shape({
        startTime: string,
        endTime: string
    }),

    outputFormat: string,
    description: string,
    label: string,
    className: string,
    labelClassName: string,
    timepickerClassName: string,
    descriptionClassName: string,

    error: node,

    hideErrorMessages: bool,
    isRequired: bool,

    intl: intlShape.isRequired,

    onChange: func.isRequired
};

TimeRange.defaultProps = {
    value: {},

    outputFormat: undefined,
    description: undefined,
    label: undefined,
    className: undefined,
    labelClassName: undefined,
    timepickerClassName: undefined,
    descriptionClassName: undefined,

    error: null,

    hideErrorMessages: false,
    isRequired: false,

    onChange: undefined
};

export default injectIntl(TimeRange);
