import { PureComponent } from 'react';
import { string, bool, number, shape, func, any, node, instanceOf } from 'prop-types';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import { isUndefined } from 'lodash';

import { withRender } from '../../../shared';
import { TextField, Placement } from '../../../index';
import styles from './component.scss';
import {
    defaultDateFormat,
    defaultTimeFormat,
    defaultDatePlaceholder,
    defaultTimePlaceholder,
    VARIATION
} from './constants';

class DatePickerField extends PureComponent {
    static propTypes = {
        id: string,
        label: string,
        field: shape({
            name: string.isRequired,
            value: any,
            error: string
        }),
        name: string,
        placeholder: string,
        error: node,
        context: instanceOf(HTMLElement),

        isOpen: bool,
        hidden: bool,
        required: bool,
        disabled: bool,
        hideErrorMessages: bool,

        className: string,
        fieldWrapperClassName: string,
        fieldClassName: string,

        monthsShown: number,
        excludeDates: shape({}),
        minDate: shape({}),
        maxDate: shape({}),
        minTime: shape({}),
        maxTime: shape({}),
        value: shape({}),
        dateFormat: string,
        showTimeSelectOnly: bool,
        showTimeSelect: bool,
        timeIntervals: number,

        onToggle: func,
        onClose: func,
        onSelect: func,
        onChange: func.isRequired
    };

    static defaultProps = {
        id: undefined,
        label: undefined,
        disabled: false,
        required: false,
        isOpen: undefined,
        hidden: false,
        hideErrorMessages: false,
        error: null,
        context: null,

        className: undefined,
        fieldWrapperClassName: undefined,
        fieldClassName: undefined,
        monthsShown: 1,
        excludeDates: undefined,
        minDate: undefined,
        maxDate: undefined,
        minTime: undefined,
        maxTime: undefined,
        value: undefined,
        name: undefined,
        placeholder: undefined,
        dateFormat: undefined,
        showTimeSelect: false,
        showTimeSelectOnly: false,
        timeIntervals: 15,

        onToggle: undefined,
        onClose: undefined,
        onSelect: undefined
    };

    constructor(props) {
        super(props);

        this.variation = this.getVariation();
    }

    state = {
        isOpen: this.props.isOpen
    };

    getVariation() {
        if (this.props.showTimeSelectOnly) {
            return VARIATION.TIME;
        } else if (this.props.showTimeSelect) {
            return VARIATION.DATE_TIME;
        }

        return VARIATION.DATE;
    }

    getPlaceholder(type) {
        switch (type) {
        case VARIATION.DATE: return defaultDatePlaceholder;
        case VARIATION.DATE_TIME: return `${defaultDatePlaceholder} ${defaultTimePlaceholder}`;
        case VARIATION.TIME: return defaultTimePlaceholder;
        default: return this.props.placeholder;
        }
    }

    getFormatData(type) {
        switch (type) {
        case VARIATION.DATE: return defaultDateFormat;
        case VARIATION.DATE_TIME: return `${defaultDateFormat} ${defaultTimeFormat}`;
        case VARIATION.TIME: return defaultTimeFormat;
        default: return this.props.placeholder;
        }
    }

    datePickerRef = null;

    handleToggle = () => {
        if (isUndefined(this.props.isOpen)) {
            this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
        } else if (this.props.onToggle) {
            this.props.onToggle();
        }

        this.updatePosition();
    };

    handleClose = () => {
        if (isUndefined(this.props.isOpen)) {
            this.setState({ isOpen: false });
        } else if (this.props.onClose) {
            this.props.onClose();
        }
    };

    handleSelect = val => {
        this.props.onChange(this.props.field.name, val);

        if (this.variation !== VARIATION.DATE_TIME) {
            this.handleClose();
        }
    };

    render() {
        const format = this.getFormatData(this.variation);
        const value = this.props.field.value ? this.props.field.value.format(format) : '';

        return (
            <div className={classNames(styles.root, this.props.className)}>
                <Placement
                    isOpen
                    target={
                        <TextField
                            id={this.props.id}
                            icon={this.props.showTimeSelectOnly ? 'clock' : 'calendar'}
                            label={this.props.label}
                            name={this.props.field.name}
                            value={value}
                            error={this.props.field.error}
                            placeholder={this.getPlaceholder(this.variation)}

                            fieldClassName={classNames(
                                styles.field,
                                this.props.fieldClassName,
                                styles[this.variation]
                            )}

                            readOnly
                            hideErrorMessages={this.props.hideErrorMessages}
                            disabled={this.props.disabled}
                            required={this.props.required}

                            onClick={this.handleToggle}
                        />
                    }
                    onDismiss={this.handleClose}
                    position="bottom-start"
                    context={this.props.context}
                >
                    {({ updatePosition }) => {
                        this.updatePosition = updatePosition;

                        return (
                            <div hidden={isUndefined(this.props.isOpen) ? !this.state.isOpen : !this.props.isOpen}>
                                <DatePicker
                                    inline
                                    readOnly
                                    showTimeSelectOnly={this.props.showTimeSelectOnly}
                                    showTimeSelect={this.props.showTimeSelect}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    monthsShown={this.props.monthsShown}
                                    excludeDates={this.props.excludeDates}
                                    minDate={this.props.minDate}
                                    maxDate={this.props.maxDate}
                                    minTime={this.props.minTime}
                                    maxTime={this.props.maxTime}
                                    onChange={this.handleSelect}
                                    selected={this.props.field.value}
                                    dateFormat={format}
                                    timeIntervals={this.props.timeIntervals}
                                />
                            </div>
                        );
                    }}
                </Placement>
            </div>
        );
    }
}

export default withRender()(DatePickerField);
